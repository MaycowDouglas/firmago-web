import '@/app/globals.css'

import React from 'react'

import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'

import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <div className={plusJakartaSans.className}>
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    })
  ]
}

export default preview
