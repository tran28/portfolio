import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

const useCurrentSection = (sections, firstSectionOffset = 0.6) => {
  const [currentSection, setCurrentSection] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = scrollY.get();

      const firstSection = document.getElementById(sections[0]);
      if (firstSection) {
        const firstSectionHeight = firstSection.offsetHeight;
        const firstSectionBottom = firstSection.offsetTop + firstSectionHeight;
        const offsetThreshold = firstSectionBottom * firstSectionOffset;

        // Check if we're within the offset range of the first section
        if (scrollPosition <= offsetThreshold) {
          setCurrentSection(sections[0]);
          return;
        }
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          const sectionTop = offsetTop;
          const sectionBottom = offsetTop + offsetHeight;

          // Check if the middle of the viewport is within the section
          if (
            scrollPosition + viewportHeight / 2 >= sectionTop &&
            scrollPosition + viewportHeight / 2 < sectionBottom
          ) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Set up subscription to scrollY changes
    const unsubscribeScroll = scrollY.on("change", handleScroll);

    // Cleanup
    return () => {
      unsubscribeScroll();
    };
  }, [sections, scrollY, firstSectionOffset]);

  return currentSection;
};

export default useCurrentSection;
