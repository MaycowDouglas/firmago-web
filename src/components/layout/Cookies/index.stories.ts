import { Meta, StoryObj } from '@storybook/react'

import { Cookies } from './index'

const meta = {
  title: 'Layout/Cookies',
  component: Cookies,
  tags: ['autodocs'],
} satisfies Meta<typeof Cookies>

export default meta
type Story = StoryObj<typeof Cookies>

export const Default: Story = {
  args: {
    show: true,
    onAccept: () => {},
  },
}
