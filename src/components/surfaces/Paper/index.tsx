import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

import { paperStyle } from './index.style'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  color?: 'default' | 'primary' | 'secondary' | 'white'
}

export const Paper = ({
  color = 'default',
  className = '',
  children,
  ...rest
}: Props) => {
  return (
    <div className={paperStyle({ color, className })} {...rest}>
      {children}
    </div>
  )
}
