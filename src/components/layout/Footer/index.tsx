import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Graphic2 from '@/app/images/graphic-2.png'
import { Logo } from '@/components/media/Logo'

type Props = {
  compact?: boolean
  className?: string
}

export const Footer = ({ compact = false, className = '' }: Props) => {
  return compact ? (
    <footer className={`bg-white py-2 text-xs ${className}`}>
      <div className="container flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <div className="w-28">
          <Logo color="black" />
        </div>

        <ul className="flex">
          <li className="px-1 text-slate-500 first:pl-0 last:pr-0">
            <Link href="">Contáctenos</Link>
          </li>
          <li className="px-1 text-slate-500 first:pl-0 last:pr-0">|</li>
          <li className="px-1 text-slate-500 first:pl-0 last:pr-0">
            <Link href="">Condiciones de uso</Link>
          </li>
          <li className="px-1 text-slate-500 first:pl-0 last:pr-0">|</li>
          <li className="px-1 text-slate-500 first:pl-0 last:pr-0">
            <Link href="">Privacidad</Link>
          </li>
        </ul>

        <p className="text-slate-500">
          Copyright © 2024 FirmaGo, Inc.{' '}
          <span className="md:hidden lg:inline">
            Reservados todos los derechos
          </span>
        </p>
      </div>
    </footer>
  ) : (
    <footer
      className={`relative overflow-hidden bg-slate-100 text-blue-900 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1930 439"
        className="absolute -left-20 -top-20 right-0 h-56 object-cover object-center md:-left-40 md:h-60 lg:-top-20 lg:h-72 xl:-left-60 xl:-top-40 xl:h-96"
        fill="none"
      >
        <path
          fill="#0043F4"
          fillRule="evenodd"
          d="M951.771 38.113c11.203 28.58-.973 61.008-28.219 75.15l-156.569 81.273L1612.52 31.101c30.47-5.89 60.41 12.429 69.03 42.241 8.62 29.813-6.92 61.281-35.83 72.563l-419.19 163.588 699.88-17.464 3 119.963-1042.004 26c-29.131.727-54.572-19.582-60.318-48.149-5.747-28.568 9.863-57.134 37.009-67.727l122.517-47.812L383.296 390.92c-29.271 5.658-58.256-11.034-68.054-39.191-9.798-28.157 2.564-59.237 29.025-72.972l19.738-10.246-332.186 91.352L0 244.158l880-242c29.599-8.14 60.568 7.375 71.771 35.955Z"
          clipRule="evenodd"
        />
      </svg>

      <Image
        src={Graphic2}
        alt=""
        className="absolute right-0 top-10 hidden w-48 md:block"
      />

      <div className="container relative z-10 py-10 lg:py-20">
        <div className="flex justify-end md:justify-start">
          <Logo color="white" className="2xl:hidden" />
        </div>

        <p className="mt-36 text-3xl font-bold leading-8 md:mt-32 md:text-4xl lg:text-5xl">
          Tu seguridad digital <br />
          es nuestra prioridad.
        </p>

        <ul className="mt-5 flex flex-col md:mt-10 md:flex-row md:justify-end md:gap-5">
          <li className="hidden py-1 font-semibold md:inline">@FirmaGo 2023</li>
          <li className="py-1 font-semibold">
            <Link href="" className="hover:text-blue-500">
              Política de Cookies
            </Link>
          </li>
          <li className="py-1 font-semibold">
            <Link href="" className="hover:text-blue-500">
              Aviso Legal
            </Link>
          </li>
        </ul>

        <p className="mt-10 text-center font-semibold md:hidden">
          @FirmaGo 2023
        </p>
      </div>
    </footer>
  )
}
