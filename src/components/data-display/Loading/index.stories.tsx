import { Meta } from '@storybook/react'

import { Loading } from './index'

const meta = {
  title: 'Data-Display/Loading',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>

export default meta

export const Default = () => (
  <div className="flex items-end gap-5">
    <Loading size={'sm'} />
    <Loading size={'md'} />
    <Loading size={'lg'} />
  </div>
)
