import { Meta, StoryObj } from '@storybook/react'

import { Badge } from './index'

const meta = {
  title: 'Data-Display/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Teste',
  },
}
