export const categoryColors = {
    榮譽: 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300',
    招生: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
    演講: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
    學術: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
    其他: 'bg-primary-50 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300',
};

/**
 * 判斷 pinned 欄位是否為 true
 * 相容 JSON Boolean 及 Google Sheets CSV 字串（'true' / 'TRUE'）
 */
const isPinned = (val) => val === true || val === 'true' || val === 'TRUE';

/**
 * 將資料依照 pinned 排序（置頂優先），不改變其餘順序
 */
export function sortByPinned(data) {
    return [...data].sort((a, b) => {
        const pA = isPinned(a.pinned);
        const pB = isPinned(b.pinned);
        if (pA && !pB) return -1;
        if (!pA && pB) return 1;
        return 0;
    });
}
