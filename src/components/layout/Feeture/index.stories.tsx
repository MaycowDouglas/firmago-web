import Image from 'next/image'

import Illustrastion from '@/app/images/illustration-contacto.png'
import { Badge } from '@/components/data-display/Badge'
import { Button } from '@/components/inputs/Button'
import { Meta } from '@storybook/react'

import { Feature } from './index'

const meta = {
  title: 'Layout/Feature',
  component: Feature,
  tags: ['autodocs'],
} satisfies Meta<typeof Feature>

export default meta

const ContentLeft = (
  <>
    <Badge color="white" className="mb-3">
      Contáctanos
    </Badge>
    <h2 className="mb-5 text-4xl font-semibold lg:text-5xl xl:text-6xl">
      Protegiendo el futuro digital de tu negocio.
    </h2>
    <p></p>
    <Button href="" icon="secondary" size={'lg'} isOutline isPill asLink>
      Contáctenos
    </Button>
    <p className="mb-2 mt-5 text-xl font-semibold">
      <em className="not-italic text-yellow-300">contacto</em>@firmago.com
    </p>
    <p>+595 21 123 4567</p>
  </>
)

const ContentRight = (
  <>
    <Image src={Illustrastion} alt="" />
  </>
)

export const Default = () => (
  <section className="space-y-20 bg-blue-900 py-10">
    <Feature left={ContentLeft} right={ContentRight} />
    <Feature inverse left={ContentLeft} right={ContentRight} />
  </section>
)
