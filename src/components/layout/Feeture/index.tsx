import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { featureStyle } from './index.style'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  left: ReactNode
  right: ReactNode
  inverse?: boolean
}

export const Feature = ({ left, right, inverse = false, ...rest }: Props) => {
  const {
    container,
    left: leftStyle,
    right: rightStyle,
  } = featureStyle({ inverse })

  return (
    <div className={container()} {...rest}>
      <div className={leftStyle()}>{left}</div>
      <div className={rightStyle()}>{right}</div>
    </div>
  )
}
