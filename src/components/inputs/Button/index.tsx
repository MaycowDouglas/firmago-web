import Link, { LinkProps } from 'next/link'
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import { Loading } from '@/components/data-display/Loading'

import { buttonIconStyle, buttonStyle } from './index.style'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type Props = (LinkProps | ButtonProps) & {
  asLink?: boolean
  children: ReactNode
  className?: string
  icon?: 'default' | 'primary' | 'secondary' | 'white'
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'white' | 'danger'
  isPill?: boolean
  isBlock?: boolean
  isOutline?: boolean
  isLoading?: boolean
}

export const Button = ({
  asLink = false,
  children,
  className = '',
  icon = undefined,
  size = 'md',
  color = 'default',
  isPill = false,
  isBlock = false,
  isOutline = false,
  isLoading = false,
  ...rest
}: Props) => {
  return asLink ? (
    <Link
      className={buttonStyle({
        size,
        color,
        isPill,
        isBlock,
        isOutline,
        hasIcon: !!icon,
        className,
      })}
      {...(rest as LinkProps)}
    >
      {isLoading ? (
        <svg
          className="h-5 w-5 animate-spin text-inherit"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          {children}{' '}
          {icon && <ButtonIcon size={size} color={icon} isBlock={isBlock} />}
        </>
      )}
    </Link>
  ) : (
    <button
      className={buttonStyle({
        size,
        color,
        isPill,
        isBlock,
        isOutline,
        hasIcon: !!icon,
        className,
      })}
      {...(rest as ButtonProps)}
    >
      {isLoading ? (
        <Loading size={size} />
      ) : (
        <>
          {children}{' '}
          {icon && <ButtonIcon size={size} color={icon} isBlock={isBlock} />}
        </>
      )}
    </button>
  )
}

type ButtonIconProps = {
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'white'
  isBlock?: boolean
}

export const ButtonIcon = ({
  size,
  color,
  isBlock = false,
}: ButtonIconProps) => {
  return (
    <span className={buttonIconStyle({ size, color, isBlock })}>
      <GoArrowUpRight strokeWidth={1} />
    </span>
  )
}
