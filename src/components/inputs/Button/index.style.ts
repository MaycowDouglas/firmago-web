import { tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: 'relative items-center justify-center gap-3 border-2 font-bold',
  variants: {
    size: {
      sm: 'px-4 py-3 text-xs',
      md: 'px-5 py-3 text-sm',
      lg: 'px-6 py-3 text-base',
    },
    color: {
      default: 'border-blue-900 bg-blue-900 text-white',
      primary: 'border-blue-600 bg-blue-600 text-white',
      secondary: 'border-orange-500 bg-orange-500 text-white',
      white: 'border-white bg-white text-blue-900',
      danger: 'border-red-500 bg-red-500 text-white',
    },
    isPill: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    isBlock: {
      true: 'flex w-full',
      false: 'inline-flex',
    },
    isOutline: {
      true: 'bg-opacity-0',
      false: 'bg-opacity-100',
    },
    hasIcon: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: 'white',
      isOutline: true,
      className: 'border-white text-white',
    },
    {
      color: 'default',
      isOutline: true,
      className: 'border-blue-900 bg-white bg-opacity-100 text-blue-900',
    },
    {
      color: 'primary',
      isOutline: true,
      className: 'border-blue-500 text-blue-500',
    },
    {
      color: 'secondary',
      isOutline: true,
      className: 'border-orange-500 text-orange-500',
    },
    {
      color: 'danger',
      isOutline: true,
      className: 'border-red-500 text-red-500',
    },
    {
      size: 'sm',
      hasIcon: true,
      isBlock: false,
      className: 'py-[6px] pr-1',
    },
    {
      size: 'md',
      hasIcon: true,
      isBlock: false,
      className: 'py-1 pr-1',
    },
    {
      size: 'lg',
      hasIcon: true,
      isBlock: false,
      className: 'py-1 pr-1',
    },
    {
      size: 'sm',
      hasIcon: true,
      isBlock: true,
      className: 'py-3',
    },
    {
      size: 'md',
      hasIcon: true,
      isBlock: true,
      className: 'py-3',
    },
    {
      size: 'lg',
      hasIcon: true,
      isBlock: true,
      className: 'py-3',
    },
  ],
})

export const buttonIconStyle = tv({
  base: 'inline-flex items-center justify-center rounded-full',
  variants: {
    size: {
      sm: 'h-7 w-7',
      md: 'h-9 w-9',
      lg: 'h-10 w-10',
    },
    color: {
      default: 'border-blue-900 bg-blue-900 text-white',
      primary: 'border-blue-600 bg-blue-600 text-white',
      secondary: 'border-orange-500 bg-orange-500 text-white',
      white: 'border-white bg-white text-blue-900',
    },
    isBlock: {
      true: 'absolute right-2 top-1/2 -translate-y-1/2',
      false: '',
    },
  },
})
