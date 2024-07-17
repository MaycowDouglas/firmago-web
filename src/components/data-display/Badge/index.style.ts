import { tv } from 'tailwind-variants'

export const badgeStyle = tv({
  base: 'inline-flex rounded-md bg-opacity-10 px-3 py-1 text-sm font-semibold',
  variants: {
    color: {
      default: 'bg-blue-900 text-blue-900',
      primary: 'bg-blue-600 text-blue-600',
      secondary: 'bg-orange-500 text-orange-500',
      white: 'bg-white text-white',
    },
  },
})
