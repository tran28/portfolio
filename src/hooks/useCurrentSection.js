import { useState, useEffect } from 'react';

// Custom hook for tracking the current section in view
const useCurrentSection = (sections) => {
    // State to store the ID of the current section in view
    const [currentSection, setCurrentSection] = useState('');

    // useEffect hook to set up and clean up the IntersectionObserver
    useEffect(() => {
        // Creating an IntersectionObserver instance which will observe
        // when different sections intersect with the viewport
        const observer = new IntersectionObserver((entries) => {
            // Callback for when observed elements' intersection status changes
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        }, { threshold: 0.65 }); // Configuring the observer to trigger when 70% of a section is in view

        // Observing each section passed to the hook
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            // Only observe the section if it exists
            if (section) observer.observe(section);
        });

        // Cleanup function to unobserve all sections on component unmount
        return () => {
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) observer.unobserve(section);
            });
        };
    }, [sections]);

    // Returning the current section in view
    return currentSection;
};

export default useCurrentSection;
