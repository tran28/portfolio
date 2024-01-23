import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export const getIcon = (label, {color, size, stroke}) => {
    const icons = {
        'Github': <IconBrandGithub color={color} size={size} stroke={stroke} />,
        'LinkedIn': <IconBrandLinkedin color={color} size={size} stroke={stroke} />,
        'Email': <IconMail color={color} size={size} stroke={stroke} />
    };

    return icons[label] || null; // Returns the icon or null if not found
};
