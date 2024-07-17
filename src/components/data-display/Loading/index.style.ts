import { tv } from 'tailwind-variants'

export const loadingStyle = tv({
  base: 'animate-spin text-inherit',
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
})
