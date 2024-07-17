import { tv } from 'tailwind-variants'

export const paperStyle = tv({
  base: 'rounded-lg p-7',
  variants: {
    color: {
      white: 'bg-white text-slate-800',
      default: 'bg-blue-900 text-white',
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-orange-500 text-white',
    },
  },
})
