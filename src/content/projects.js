import image_speedymart from '../assets/image_speedymart.png'
import pdf_speedymart_design_doc from '../assets/pdf_speedymart.pdf'
import image_aim from '../assets/image_aim.png'
import image_rico_naylor from '../assets/image_rico_naylor.png'
import pdf_eng4000_final_report_aim from '../assets/pdf_eng4000_final_report_aim.pdf'

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
        image: image_aim,
        title: "AiM (Engineering Capstone)",
        href: "https://www.youtube.com/watch?v=7gM-D7A--6E",
        links: {
            Github: "https://github.com/tran28/AI_Learning_Platform-AiM",
            Youtube: "https://www.youtube.com/watch?v=7gM-D7A--6E",
            PDF: pdf_eng4000_final_report_aim,
        },
        description: "Developed a cloud-based AI e-learning solution using Google Natural Language and research studies from University of Toronto on gender bias in teaching.",
        technologies: ["React", "Express", "MySQL", "Google Cloud"],
    },
    {
        image: image_rico_naylor,
        title: "Rico Naylor Podcast Page",
        href: "https://riconaylor.com/",
        links: {
            Github: "https://github.com/tran28/rico-naylor",
        },
        description: "Developed a personal brand/podcast page for graduate surveyor at JLL (Manchester, UK). Designed logo using Illustrator, animated using Framer Motion.",
        technologies: ["Next.js", "Framer Motion", "AWS S3", "Illustrator"],
    },
]