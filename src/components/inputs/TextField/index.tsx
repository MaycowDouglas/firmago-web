'use client'

import React, {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

import { textFieldStyle } from './index.style'

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type Props = (InputProps | TextareaProps) & {
  type?: HTMLInputTypeAttribute
  rows?: number
  label?: string
  maxRows?: number
  minRows?: number
  isSecret?: boolean
  hasError?: boolean
  helperText?: string
  isMultiline?: boolean
}

export const TextField = ({
  id = '',
  label,
  rows = 1,
  type = 'text',
  maxRows = undefined,
  minRows = 1,
  isSecret = false,
  required = false,
  hasError = false,
  helperText = undefined,
  isMultiline = false,
  ...rest
}: Props) => {
  const {
    label: labelStyle,
    field: fieldStyle,
    helperText: helperTextStyle,
  } = textFieldStyle({ hasError })

  if (minRows < 1) {
    throw new Error('Invalid prop! Min rows should be bigger then 0')
  }

  const [showPassword, setPasswordVisibility] = useState(false)

  const toggle = () => {
    setPasswordVisibility(!showPassword)
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className={labelStyle()}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {isMultiline ? (
        <textarea
          id={id}
          className={fieldStyle()}
          style={{
            height: 48 * rows,
            maxHeight: maxRows ? 48 * maxRows : 'auto',
            minHeight: 48 * minRows,
          }}
          {...(rest as TextareaProps)}
        />
      ) : (
        <div className="relative">
          <input
            id={id}
            type={isSecret ? (showPassword ? 'text' : 'password') : type}
            className={fieldStyle()}
            {...(rest as InputProps)}
          />
          {isSecret && (
            <button
              className="absolute bottom-0 right-0 top-0 grid place-content-center px-5"
              onClick={toggle}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          )}
        </div>
      )}
      {helperText && <p className={helperTextStyle()}>{helperText}</p>}
    </div>
  )
}
