import {
  IconArrowNarrowDown,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowNarrowUp,
  IconArrowUpRight,
} from '@tabler/icons-react';

/**
 * Editorial arrow icon (Tabler narrow / corner variants).
 * Translates on hover when used inside a `group/arrow`.
 *
 *   <Arrow dir="ne" /> →  ↗  diagonal (most common, used on external links)
 *   <Arrow dir="e"  /> →  →  east
 *   <Arrow dir="w"  /> →  ←  west
 *   <Arrow dir="s"  /> →  ↓  south
 *   <Arrow dir="n"  /> →  ↑  north
 */
const ICONS = {
  ne: IconArrowUpRight,
  e: IconArrowNarrowRight,
  w: IconArrowNarrowLeft,
  s: IconArrowNarrowDown,
  n: IconArrowNarrowUp,
};

export function Arrow({ dir = 'ne', size = 16, stroke = 1.5, className = '' }) {
  const Icon = ICONS[dir] ?? ICONS.ne;
  const motion =
    dir === 'ne'
      ? 'group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-0.5'
      : dir === 'e'
        ? 'group-hover/arrow:translate-x-1'
        : dir === 'w'
          ? 'group-hover/arrow:-translate-x-1'
          : dir === 's'
            ? 'group-hover/arrow:translate-y-1'
            : 'group-hover/arrow:-translate-y-1';

  return (
    <Icon
      aria-hidden="true"
      size={size}
      stroke={stroke}
      className={`inline-block shrink-0 transition-transform duration-300 ease-out ${motion} ${className}`}
    />
  );
}
