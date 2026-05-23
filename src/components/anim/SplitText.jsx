import { motion } from 'framer-motion';
import { charReveal, stagger } from '../../lib/animations';

/**
 * Word-and-char mask reveal. Triggers when scrolled into view, plays once.
 */
export function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  charStagger = 0.018,
  amount = 0.4,
  ariaLabel,
}) {
  const words = text.split(' ');
  return (
    <Tag className={className} aria-label={ariaLabel ?? text}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount }}
        variants={stagger(delay, charStagger)}
        aria-hidden="true"
      >
        {words.map((word, wi) => (
          <span
            key={`${word}-${wi}`}
            className="inline-block whitespace-nowrap"
            style={{ marginRight: wi === words.length - 1 ? 0 : '0.25em' }}
          >
            {[...word].map((char, ci) => (
              <span
                key={ci}
                className="inline-block align-bottom"
                style={{ lineHeight: 1, clipPath: 'inset(-50% 0 -25% 0)' }}
              >
                <motion.span className="inline-block" variants={charReveal}>
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
