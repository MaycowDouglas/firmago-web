'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'
import { FiMenu, FiX } from 'react-icons/fi'

import { Button } from '@/components/inputs/Button'
import { Logo } from '@/components/media/Logo'

import { headerStyle } from './index.style'

type Props = {
  user?: string | null
  isFloating?: boolean
}

export const Header = ({ isFloating = false, user = null }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const { collapse, wrapper } = headerStyle({ isOpen, isFloating })

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <header className={wrapper()}>
      <div className="container flex items-center justify-between py-5 lg:justify-start lg:py-2">
        <div className="w-32">
          <Logo color={isFloating ? 'white' : 'blue'} />
        </div>

        <button
          className="relative z-10 text-white md:text-blue-900 lg:hidden"
          onClick={toggle}
        >
          <FiMenu size={24} />
        </button>

        <div className={collapse()}>
          <nav className="flex h-full flex-col justify-between px-8 py-5 lg:flex-row">
            <div className="flex justify-between lg:hidden">
              <div className="w-32">
                <Logo color="blue" />
              </div>

              <button className="relative z-10 lg:hidden" onClick={toggle}>
                <FiX size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-center lg:flex-row">
              <li className="px-2 py-1">
                <Link
                  href="/#inicio"
                  className="text-xl font-semibold lg:text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li className="px-2 py-1">
                <Link
                  href="/#nosostros"
                  className="text-xl font-semibold lg:text-sm"
                >
                  Nosostros
                </Link>
              </li>
              <li className="px-2 py-1">
                <Link
                  href="/#soluciones"
                  className="text-xl font-semibold lg:text-sm"
                >
                  Soluciones
                </Link>
              </li>
              <li className="px-2 py-1">
                <Link
                  href="/#contacto"
                  className="text-xl font-semibold lg:text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            {user ? (
              <ul className="relative z-10 flex flex-col gap-3 lg:flex-row">
                {/* <li>
                  <Button
                    asLink
                    isBlock
                    isPill
                    isOutline
                    href="/iniciar-sesion"
                    color={'secondary'}
                    className="lg:hidden"
                  >
                    Encerrar sesión
                  </Button>
                  <Button
                    asLink
                    isPill
                    href="/iniciar-sesion"
                    size={'sm'}
                    isOutline
                    color={'danger'}
                    className="hidden lg:inline-flex"
                  >
                    Encerrar sesión
                  </Button>
                </li> */}
                <li>
                  <Button
                    asLink
                    isPill
                    isBlock
                    href="/dashboard"
                    icon={'white'}
                    color={'secondary'}
                    className="lg:hidden"
                  >
                    <FaBagShopping /> Mis pedidos
                  </Button>
                  <Button
                    asLink
                    isPill
                    href="/dashboard"
                    size={'sm'}
                    icon={'white'}
                    color={'secondary'}
                    className="hidden lg:inline-flex"
                  >
                    <FaBagShopping /> Mis pedidos
                  </Button>
                </li>
              </ul>
            ) : (
              <ul className="relative z-10 flex flex-col gap-3 lg:flex-row">
                <li>
                  <Button
                    asLink
                    isBlock
                    isPill
                    isOutline
                    href="/iniciar-sesion"
                    color={'primary'}
                    className="lg:hidden"
                  >
                    Iniciar sesión
                  </Button>
                  <Button
                    asLink
                    isPill
                    href="/iniciar-sesion"
                    size={'sm'}
                    isOutline={!isFloating}
                    color={isFloating ? 'white' : 'primary'}
                    className="hidden lg:inline-flex"
                  >
                    Iniciar sesión
                  </Button>
                </li>
                <li>
                  <Button
                    asLink
                    isPill
                    isBlock
                    href="/crear-cuenta"
                    icon={'white'}
                    color={'secondary'}
                    className="lg:hidden"
                  >
                    <FaUser /> Crear cuenta
                  </Button>
                  <Button
                    asLink
                    isPill
                    href="/crear-cuenta"
                    size={'sm'}
                    icon={'white'}
                    color={'secondary'}
                    className="hidden lg:inline-flex"
                  >
                    <FaUser /> Crear cuenta
                  </Button>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
