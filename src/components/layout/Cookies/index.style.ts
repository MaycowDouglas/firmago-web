import { tv } from 'tailwind-variants'

export const cookiesStyle = tv({
  base: 'flex-col space-y-7 lg:flex-row lg:items-center lg:justify-between lg:gap-x-44 lg:space-y-0',
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
})
