import { Meta } from '@storybook/react'

import { Header } from './index'

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

export const All = () => (
  <>
    <Header />

    <Header user="melo.maycow@gmail.com" />

    <section className="main-gradient relative min-h-32 w-full">
      <Header isFloating user="melo.maycow@gmail.com" />
    </section>

    <section className="main-gradient relative min-h-32 w-full">
      <Header isFloating />
    </section>
  </>
)
