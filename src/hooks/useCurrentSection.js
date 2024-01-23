import { useState, useEffect } from 'react';

const useCurrentSection = (sections) => {
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        }, { threshold: 0.7 });

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) observer.unobserve(section);
            });
        };
    }, [sections]);

    return currentSection;
};

export default useCurrentSection;
