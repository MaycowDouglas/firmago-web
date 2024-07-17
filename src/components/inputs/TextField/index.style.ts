import { tv } from 'tailwind-variants'

export const textFieldStyle = tv({
  slots: {
    label: 'font-semibold',
    field:
      'w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none',
    helperText: 'text-xs text-gray-500',
  },
  variants: {
    hasError: {
      true: {
        field:
          'border-red-500 text-red-500 focus:border-red-500 focus:shadow focus:shadow-red-200',
        helperText: 'text-red-500',
      },
      false: {
        field: 'focus:border-blue-500',
      },
    },
  },
})
