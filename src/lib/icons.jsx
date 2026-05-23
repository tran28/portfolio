import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandYoutube,
  IconFileTypePdf,
  IconFilePencil,
  IconBrandFigma,
} from '@tabler/icons-react';

const ICONS = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  email: IconMail,
  youtube: IconBrandYoutube,
  pdf: IconFileTypePdf,
  uml: IconFilePencil,
  figma: IconBrandFigma,
};

export function getIcon(label, props = {}) {
  const Icon = ICONS[label.toLowerCase()];
  return Icon ? <Icon {...props} /> : null;
}
