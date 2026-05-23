import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export function Reveal({
  children,
  delay = 0,
  amount = 0.2,
  className = '',
  as: Tag = motion.div,
}) {
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}
