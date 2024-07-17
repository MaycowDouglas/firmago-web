import React, { DetailedHTMLProps } from 'react'

import { badgeStyle } from './index.style'

type Props = DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  color?: 'default' | 'primary' | 'secondary' | 'white'
}

export const Badge = ({
  color = 'default',
  children,
  className,
  ...rest
}: Props) => {
  return (
    <span className={badgeStyle({ color, className })} {...rest}>
      {children}
    </span>
  )
}
