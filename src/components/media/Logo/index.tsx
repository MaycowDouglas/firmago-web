import Image from 'next/image'
import React from 'react'

import FirmaGOBlue from '@/app/images/firmago-blue.png'
import FirmaGODark from '@/app/images/firmago-dark.png'
import FirmaGOLight from '@/app/images/firmago-light.png'

type Props = {
  color?: 'blue' | 'white' | 'black'
  className?: string
}

export const Logo = ({ color = 'white', className = '' }: Props) => {
  const variants = {
    blue: FirmaGOBlue,
    white: FirmaGOLight,
    black: FirmaGODark,
  }

  return <Image src={variants[color]} alt="FirmaGO" className={className} />
}
