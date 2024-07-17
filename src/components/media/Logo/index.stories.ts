import { Meta, StoryObj } from '@storybook/react'

import { Logo } from './index'

const meta = {
  title: 'Media/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {},
}
