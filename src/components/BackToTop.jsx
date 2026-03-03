import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="back-to-top"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-primary-800 hover:bg-primary-700 text-white w-10 h-10 rounded shadow-none border border-gray-200 ${isVisible ? 'flex' : 'hidden'
                } justify-center items-center text-lg transition-opacity duration-300`}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}
