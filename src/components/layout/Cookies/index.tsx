'use client'

import React, { useState } from 'react'

import { Button } from '@/components/inputs/Button'
import { Paper } from '@/components/surfaces/Paper'

import { cookiesStyle } from './index.style'

type Props = {
  show?: boolean
  onAccept?: () => void
  className?: string
}

export const Cookies = ({
  show = true,
  onAccept = () => {},
  className = '',
}: Props) => {
  const [isVisible, setVisibility] = useState(show)

  const accept = () => {
    onAccept()
    setVisibility(!isVisible)
  }

  return (
    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center">
      <Paper
        color={'white'}
        className={cookiesStyle({
          show: isVisible,
          className: `${className} max-w-7xl`,
        })}
      >
        <div>
          <h2 className="mb-2 text-xl font-bold">Valoramos su privacidad</h2>
          <p className="text-lg font-medium">
            Utilizamos cookies para mejorar su experiencia de navegación,
            mostrar anuncios o contenido personalizado y analizar nuestro
            tráfico. Al hacer clic en “Aceptar todos”, usted acepta nuestro uso
            de cookies.
          </p>
        </div>
        <div className="flex justify-end">
          <Button color={'primary'} isPill onClick={accept}>
            Aceptar
          </Button>
        </div>
      </Paper>
    </div>
  )
}
