import image_speedymart from '../assets/image_speedymart.png'
import pdf_speedymart_design_doc from '../assets/pdf_speedymart.pdf'

export const projects = [
    {
        image: image_speedymart,
        title: "SpeedyMart",
        href: "https://speedymart.herokuapp.com/",
        links: {
            Github: "https://github.com/tran28/SpeedyMart",
            PDF: pdf_speedymart_design_doc,
        },
        description: "Conceptualized and developed an e-commerce website as part of an e-commerce course final project (A+ grade).",
        technologies: ["React", "Express", "MongoDB", "AWS S3", "Heroku", "Jest"],
    },
    {
        image: "",
        title: "AiM (Engineering Capstone)",
        href: "https://www.youtube.com/watch?v=7gM-D7A--6E",
        links: {
            Github: "https://github.com/tran28/AI_Learning_Platform-AiM",
            Youtube: "https://www.youtube.com/watch?v=7gM-D7A--6E"
        },
        description: "Developed a cloud-based AI e-learning solution using Google Natural Language and research studies from University of Toronto on gender bias in teaching.",
        technologies: ["React", "Express", "MySQL", "Google Cloud"],
    },
]