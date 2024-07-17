import { Meta } from '@storybook/react'

import { Button } from './index'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const Default = () => (
  <div className="grid grid-cols-1 gap-5">
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'default'}>
        Button
      </Button>
      <Button size={'sm'} color={'default'} isLoading>
        Button
      </Button>
      <Button size={'md'} color={'default'}>
        Button
      </Button>
      <Button size={'md'} color={'default'} isLoading>
        Button
      </Button>
      <Button size={'lg'} color={'default'}>
        Button
      </Button>
      <Button size={'lg'} color={'default'} isLoading>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'default'}>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'default'} isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'default'} isOutline>
        Button
      </Button>
      <Button size={'md'} color={'default'} isOutline>
        Button
      </Button>
      <Button size={'lg'} color={'default'} isOutline>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'default'} isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'default'} isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'default'} isPill>
        Button
      </Button>
      <Button size={'md'} color={'default'} isPill>
        Button
      </Button>
      <Button size={'lg'} color={'default'} isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'default'} isPill>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'default'} isPill isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'default'} isOutline isPill>
        Button
      </Button>
      <Button size={'md'} color={'default'} isOutline isPill>
        Button
      </Button>
      <Button size={'lg'} color={'default'} isOutline isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'default'} isPill isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'default'} isPill isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'default'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'default'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'default'} isPill icon={'secondary'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'default'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'default'}
        isPill
        icon={'secondary'}
        isLoading
      >
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'default'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'default'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'default'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button
        isBlock
        size={'sm'}
        color={'default'}
        isOutline
        isPill
        icon={'secondary'}
      >
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'default'}
        isOutline
        isPill
        icon={'secondary'}
        isLoading
      >
        Button
      </Button>
    </div>
  </div>
)

export const Primary = () => (
  <div className="grid grid-cols-1 gap-5">
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'primary'}>
        Button
      </Button>
      <Button size={'sm'} color={'primary'} isLoading>
        Button
      </Button>
      <Button size={'md'} color={'primary'}>
        Button
      </Button>
      <Button size={'md'} color={'primary'} isLoading>
        Button
      </Button>
      <Button size={'lg'} color={'primary'}>
        Button
      </Button>
      <Button size={'lg'} color={'primary'} isLoading>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'primary'}>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'primary'} isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'primary'} isOutline>
        Button
      </Button>
      <Button size={'md'} color={'primary'} isOutline>
        Button
      </Button>
      <Button size={'lg'} color={'primary'} isOutline>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'primary'} isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'primary'} isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'primary'} isPill>
        Button
      </Button>
      <Button size={'md'} color={'primary'} isPill>
        Button
      </Button>
      <Button size={'lg'} color={'primary'} isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'primary'} isPill>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'primary'} isPill isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'primary'} isOutline isPill>
        Button
      </Button>
      <Button size={'md'} color={'primary'} isOutline isPill>
        Button
      </Button>
      <Button size={'lg'} color={'primary'} isOutline isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'primary'} isPill isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'primary'} isPill isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'primary'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'primary'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'primary'} isPill icon={'secondary'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'primary'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'primary'}
        isPill
        icon={'secondary'}
        isLoading
      >
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'primary'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'primary'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'primary'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button
        isBlock
        size={'sm'}
        color={'primary'}
        isOutline
        isPill
        icon={'secondary'}
      >
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'primary'}
        isOutline
        isPill
        icon={'secondary'}
        isLoading
      >
        Button
      </Button>
    </div>
  </div>
)

export const Secondary = () => (
  <div className="grid grid-cols-1 gap-5">
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'secondary'}>
        Button
      </Button>
      <Button size={'sm'} color={'secondary'} isLoading>
        Button
      </Button>
      <Button size={'md'} color={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'secondary'} isLoading>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'} isLoading>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'secondary'}>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'secondary'} isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'secondary'} isOutline>
        Button
      </Button>
      <Button size={'md'} color={'secondary'} isOutline>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'} isOutline>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'secondary'} isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'secondary'} isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'secondary'} isPill>
        Button
      </Button>
      <Button size={'md'} color={'secondary'} isPill>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'} isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'secondary'} isPill>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'secondary'} isPill isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'secondary'} isOutline isPill>
        Button
      </Button>
      <Button size={'md'} color={'secondary'} isOutline isPill>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'} isOutline isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'secondary'} isPill isOutline>
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'secondary'}
        isPill
        isOutline
        isLoading
      >
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'secondary'} isPill icon={'white'}>
        Button
      </Button>
      <Button size={'md'} color={'secondary'} isPill icon={'white'}>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'} isPill icon={'white'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'secondary'} isPill icon={'white'}>
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'secondary'}
        isPill
        icon={'white'}
        isLoading
      >
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'secondary'} isOutline isPill icon={'white'}>
        Button
      </Button>
      <Button size={'md'} color={'secondary'} isOutline isPill icon={'white'}>
        Button
      </Button>
      <Button size={'lg'} color={'secondary'} isOutline isPill icon={'white'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button
        isBlock
        size={'sm'}
        color={'secondary'}
        isOutline
        isPill
        icon={'white'}
      >
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'secondary'}
        isOutline
        isPill
        icon={'white'}
        isLoading
      >
        Button
      </Button>
    </div>
  </div>
)

export const White = () => (
  <div className="grid grid-cols-1 gap-5">
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'white'}>
        Button
      </Button>
      <Button size={'sm'} color={'white'} isLoading>
        Button
      </Button>
      <Button size={'md'} color={'white'}>
        Button
      </Button>
      <Button size={'md'} color={'white'} isLoading>
        Button
      </Button>
      <Button size={'lg'} color={'white'}>
        Button
      </Button>
      <Button size={'lg'} color={'white'} isLoading>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'white'}>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'white'} isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'white'} isOutline>
        Button
      </Button>
      <Button size={'md'} color={'white'} isOutline>
        Button
      </Button>
      <Button size={'lg'} color={'white'} isOutline>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'white'} isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'white'} isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'white'} isPill>
        Button
      </Button>
      <Button size={'md'} color={'white'} isPill>
        Button
      </Button>
      <Button size={'lg'} color={'white'} isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'white'} isPill>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'white'} isPill isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'white'} isOutline isPill>
        Button
      </Button>
      <Button size={'md'} color={'white'} isOutline isPill>
        Button
      </Button>
      <Button size={'lg'} color={'white'} isOutline isPill>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'white'} isPill isOutline>
        Button
      </Button>
      <Button isBlock size={'sm'} color={'white'} isPill isOutline isLoading>
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'white'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'white'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'white'} isPill icon={'secondary'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button isBlock size={'sm'} color={'white'} isPill icon={'secondary'}>
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'white'}
        isPill
        icon={'secondary'}
        isLoading
      >
        Button
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size={'sm'} color={'white'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'md'} color={'white'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
      <Button size={'lg'} color={'white'} isOutline isPill icon={'secondary'}>
        Button
      </Button>
    </div>
    <div className="max-w-lg space-y-5">
      <Button
        isBlock
        size={'sm'}
        color={'white'}
        isOutline
        isPill
        icon={'secondary'}
      >
        Button
      </Button>
      <Button
        isBlock
        size={'sm'}
        color={'white'}
        isOutline
        isPill
        icon={'secondary'}
        isLoading
      >
        Button
      </Button>
    </div>
  </div>
)
