import { tv } from 'tailwind-variants'

export const headerStyle = tv({
  slots: {
    wrapper: '',
    collapse:
      'fixed bottom-0 left-0 right-0 top-0 z-50 bg-white text-blue-900 transition-all lg:static lg:flex-1 lg:-translate-y-0 lg:bg-transparent lg:text-inherit',
    navLink: 'px-2 py-1 text-xl font-semibold lg:text-sm',
  },
  variants: {
    isFloating: {
      true: {
        wrapper: 'absolute left-0 right-0 top-0 z-50 bg-transparent text-white',
      },
      false: {
        wrapper: 'bg-white text-blue-900',
      },
    },
    isOpen: {
      true: {
        collapse: 'translate-y-0',
      },
      false: {
        collapse: '-translate-y-full',
      },
    },
  },
})
