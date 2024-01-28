import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandYoutube, IconFileTypePdf, IconFilePencil, IconBrandFigma } from "@tabler/icons-react";

export const getIcon = (label, { color, size, stroke }) => {
    const icons = {
        'github': <IconBrandGithub color={color} size={size} stroke={stroke} />,
        'linkedin': <IconBrandLinkedin color={color} size={size} stroke={stroke} />,
        'email': <IconMail color={color} size={size} stroke={stroke} />,
        'youtube': <IconBrandYoutube color={color} size={size} stroke={stroke} />,
        'pdf': <IconFileTypePdf color={color} size={size} stroke={stroke} />,
        'uml': <IconFilePencil color={color} size={size} stroke={stroke} />,
        'figma': <IconBrandFigma color={color} size={size} stroke={stroke} />,
    };

    return icons[label.toLowerCase()] || null; // Returns the icon or null if not found
};
