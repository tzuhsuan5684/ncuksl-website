/**
 * Simple CSV parser without external dependencies
 * handles commas inside quotes correctly
 */
function parseCSV(csvText) {
    // Basic line splitting
    // Note: This naive line split works for most Google Sheet CSV exports where newlines in cells are handled carefully or non-existent
    const lines = csvText.split(/\r?\n/).filter(line => line.trim());
    if (lines.length === 0) return [];

    // Helper to parse a single CSV line respecting quotes
    const parseLine = (text) => {
        const result = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            if (char === '"') {
                // Check if it's an escaped quote ("")
                if (inQuotes && i + 1 < text.length && text[i + 1] === '"') {
                    current += '"';
                    i++; // Skip the next quote
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current);
        return result.map(v => v.trim());
    };

    const headers = parseLine(lines[0]);
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const values = parseLine(lines[i]);
        const row = {};
        // Only add row if we have matching number of columns (or close enough)
        if (values.length > 0) {
            headers.forEach((header, index) => {
                row[header] = values[index] || '';
            });
            data.push(row);
        }
    }

    return data;
}

/**
 * Fetches and parses CSV data from a Google Sheet URL.
 * Falls back to local JSON if fetching fails or URL is not provided.
 */
export async function fetchSheetData(url, fallbackUrl) {
    if (!url) {
        return fetchLocalJSON(fallbackUrl);
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const csvText = await response.text();

        const data = parseCSV(csvText);
        return data;
    } catch (error) {
        console.error('Error fetching Google Sheet:', error);
        return fetchLocalJSON(fallbackUrl);
    }
}

async function fetchLocalJSON(url) {
    if (!url) return [];
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.error('Error loading fallback data:', err);
        return [];
    }
}
