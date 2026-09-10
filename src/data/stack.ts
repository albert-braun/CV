export type StackItem = {
  name: string
  note: string
  size: 'lg' | 'md' | 'sm'
}

export const stackItems: StackItem[] = [
  { name: 'React', note: 'Interfaces as components. Hooks, composition, no leftover noise.', size: 'lg' },
  { name: 'TypeScript', note: 'Types where they earn their keep: forms, APIs, shared UI.', size: 'lg' },
  { name: 'JavaScript', note: 'The daily language. Clear over clever.', size: 'md' },
  { name: 'HTML', note: 'Semantic markup first. Headings, forms and landmarks before the styling.', size: 'md' },
  { name: 'Tailwind', note: 'Spacing and rhythm without fighting the stylesheet.', size: 'md' },
  { name: 'Redux Toolkit', note: 'Predictable state for carts, filters, and real data flow.', size: 'md' },
  { name: 'Vite', note: 'Fast local loop. Clean production builds.', size: 'sm' },
  { name: 'CSS / SCSS', note: 'Layouts that hold at the next breakpoint.', size: 'sm' },
  { name: 'Figma', note: 'From the file, not from memory. Spacing, type, breakpoints.', size: 'sm' },
  { name: 'Git', note: 'Feature branches, reviews, small commits. GitHub for repos and PRs.', size: 'sm' },
  { name: 'REST API', note: 'Wire the UI to JSON: loading, empty and error — not only the happy path.', size: 'sm' },
]
