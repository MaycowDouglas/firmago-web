import { tv } from 'tailwind-variants'

export const featureStyle = tv({
  slots: {
    left: '',
    right: '',
    container:
      'container grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center xl:gap-24',
  },
  variants: {
    inverse: {
      true: {
        left: 'md:order-1',
        right: 'md:order-0',
      },
      false: {},
    },
  },
})
