import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Editorial pull-quote with a layered reveal:
 *   - Opening curly-quote scales in
 *   - Words mask-up with a soft stagger
 *   - Closing curly-quote scales in after the last word
 *   - A hairline draws under the quote
 *   - Attribution fades up last
 *
 * The body wraps naturally to its container, so this scales from
 * narrow mobile columns up to ultrawide without hardcoded line breaks.
 */
export function QuoteReveal({ text, attribution, className = '', accentClassName = 'text-accent' }) {
  const words = text.split(' ');
  const lastWordIdx = words.length - 1;
  const baseDelay = 0.35;
  const wordStep = 0.045;
  const tailDelay = baseDelay + words.length * wordStep;

  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      <blockquote className={`text-display ${accentClassName}`} aria-label={text}>
        {/* Opening mark */}
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0.6, y: 12 },
            shown: { opacity: 0.6, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="inline-block leading-none"
          aria-hidden="true"
        >
          &ldquo;
        </motion.span>

        {/* Words */}
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ lineHeight: 1, clipPath: 'inset(-30% -5% -25% -5%)' }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '105%' },
                shown: { y: '0%' },
              }}
              transition={{
                duration: 0.9,
                ease: EASE,
                delay: baseDelay + i * wordStep,
              }}
            >
              {word}
              {i !== lastWordIdx ? ' ' : ''}
            </motion.span>
          </span>
        ))}

        {/* Closing mark */}
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0.6 },
            shown: { opacity: 0.6, scale: 1 },
          }}
          transition={{ duration: 0.9, ease: EASE, delay: tailDelay + 0.1 }}
          className="inline-block"
          aria-hidden="true"
        >
          &rdquo;
        </motion.span>
      </blockquote>

      {/* Hairline draw */}
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          shown: { scaleX: 1 },
        }}
        transition={{ duration: 1.2, ease: EASE, delay: tailDelay + 0.3 }}
        className="mt-6 h-px w-24 origin-left bg-accent"
        aria-hidden="true"
      />

      {/* Attribution */}
      {attribution && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 8 },
            shown: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: EASE, delay: tailDelay + 0.5 }}
          className="text-mono mt-4 text-[10px] uppercase tracking-[0.2em] text-muted"
        >
          <span aria-hidden="true" className="text-accent">/</span> {attribution}
        </motion.p>
      )}
    </motion.div>
  );
}
