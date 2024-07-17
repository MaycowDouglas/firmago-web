import { Meta, StoryObj } from '@storybook/react'

import { Paper } from './index'

const meta = {
  title: 'Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
} satisfies Meta<typeof Paper>

export default meta
type Story = StoryObj<typeof Paper>

export const Default: Story = {
  args: {
    children: 'Teste',
  },
}
