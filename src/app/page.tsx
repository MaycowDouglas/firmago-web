import { getServerSession } from 'next-auth'
import Image from 'next/image'

import ConnectionIcon from '@/app/images/conection-icon.png'
import FileIcon from '@/app/images/file-icon.png'
import Graphic3 from '@/app/images/graphic-3.png'
import Graphic4 from '@/app/images/graphic-4.png'
import IllustrastionContacto from '@/app/images/illustration-contacto.png'
import IllustrationMain from '@/app/images/illustration-main.png'
import IllustrationQuienesSomos from '@/app/images/illustration-quienes-somos.jpg'
import IllustrationSoluciones from '@/app/images/illustration-soluciones.png'
import authOptions from '@/auth'
import { Badge } from '@/components/data-display/Badge'
import { Button } from '@/components/inputs/Button'
import { Feature } from '@/components/layout/Feeture'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { env } from '@/config/env'
import { Certificate } from '@/types/certificate'

type DataProps = {
  certificates: Certificate[]
}

async function getData() {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/certificates`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const certificates = await res.json()

  return { certificates }
}

export default async function HomePage() {
  const { certificates }: DataProps = await getData()
  const session = await getServerSession(authOptions)

  console.log(certificates)

  return (
    <>
      <main id="inicio" className="main-gradient relative text-white">
        <div className="relative overflow-hidden">
          <Header isFloating user={session ? session.user.username : null} />
          <div className="container relative grid grid-cols-1 overflow-hidden md:grid-cols-2">
            <div className="pt-20 md:py-32 lg:py-52 xl:py-60 2xl:pb-96 2xl:pt-80">
              <h1 className="mb-7 text-3xl font-semibold lg:text-4xl xl:text-6xl">
                Tu seguridad digital es nuestra prioridad
              </h1>

              <p className="mb-8 text-lg text-gray-200">
                Descubre cómo este certificado puede simplificar y agilizar tus
                procesos de firma electrónica, asegurando la confidencialidad,
                seguridad y validez de tus documentos.
              </p>

              <Button
                href=""
                icon="secondary"
                color={'white'}
                size={'md'}
                isPill
                asLink
              >
                Solicitar un certificado
              </Button>
            </div>
            <div className="relative overflow-hidden pt-10 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 720 1368"
                fill="none"
                className="absolute -top-5 left-0 right-0"
              >
                <path
                  fill="#0043F4"
                  d="M463.062 1367.76 42.447 977.916C21.929 958.907 17.2 928.231 30.98 903.891c13.779-24.34 42.544-36.007 69.398-28.162l295.296 86.095-267.436-220.969c-22.127-18.305-28.363-49.585-14.785-74.931 13.478-25.345 42.947-37.616 70.505-29.469l222.579 66.281L20.923 370.83C-.701 352.122-6.334 320.742 7.647 295.698c13.98-25.044 43.65-36.811 70.907-28.162l262.608 83.178L53.611 89.313 134.877 0 626.4 446.866c21.021 19.11 25.849 50.189 11.667 74.73-14.181 24.54-43.449 36.006-70.505 27.457l-244.705-77.445 376.16 323.961c21.524 18.607 27.257 49.685 13.578 74.629-13.678 24.943-42.946 37.012-70.203 28.865l-208.296-62.056 264.016 218.053c22.027 18.2 28.262 49.48 14.886 74.73-10.662 20.11-31.481 32.08-53.307 32.08-5.632 0-11.264-.8-16.897-2.41l-330.9-96.35 233.24 216.14-82.072 88.51Z"
                />
              </svg>
              <div className="relative z-10">
                <Image src={IllustrationMain} alt="" />
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 720 1368"
            fill="none"
            className="md:max-w-2/3 absolute -top-20 left-1/2 hidden md:block"
            // className="absolute -top-20 left-1/2 hidden md:block md:w-2/3 xl:-top-40 xl:w-3/5 xl:-translate-x-16"
          >
            <path
              fill="#0043F4"
              d="M463.062 1367.76 42.447 977.916C21.929 958.907 17.2 928.231 30.98 903.891c13.779-24.34 42.544-36.007 69.398-28.162l295.296 86.095-267.436-220.969c-22.127-18.305-28.363-49.585-14.785-74.931 13.478-25.345 42.947-37.616 70.505-29.469l222.579 66.281L20.923 370.83C-.701 352.122-6.334 320.742 7.647 295.698c13.98-25.044 43.65-36.811 70.907-28.162l262.608 83.178L53.611 89.313 134.877 0 626.4 446.866c21.021 19.11 25.849 50.189 11.667 74.73-14.181 24.54-43.449 36.006-70.505 27.457l-244.705-77.445 376.16 323.961c21.524 18.607 27.257 49.685 13.578 74.629-13.678 24.943-42.946 37.012-70.203 28.865l-208.296-62.056 264.016 218.053c22.027 18.2 28.262 49.48 14.886 74.73-10.662 20.11-31.481 32.08-53.307 32.08-5.632 0-11.264-.8-16.897-2.41l-330.9-96.35 233.24 216.14-82.072 88.51Z"
            />
          </svg>
          <Image
            alt=""
            src={IllustrationMain}
            className="absolute bottom-0 right-0 hidden md:block md:h-4/5 md:w-auto"
          />
        </div>
        <div className="absolute -bottom-10 -left-32 right-0 z-50 md:-bottom-40 md:-left-20 xl:-bottom-48 xl:left-0 2xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1626 453"
            className="h-auto w-full opacity-90"
          >
            <g
              style={{
                mixBlendMode: 'hard-light',
              }}
            >
              <path
                fill="url(#a)"
                d="m748.689 79.326-.472.567-143.637 20.87.283-.283-466.231 67.994-120.878 17.659C6.705 173.385 0 156.858 0 138.632c0-13.693 3.777-26.442 10.293-37.302l111.152-16.243L705.06 0l43.629 79.326Z"
              />
              <path
                fill="url(#b)"
                d="M1626 74.321c0 4.817-.47 9.538-1.42 14.166L427.134 452.82l120.029-139.388L1603.43 21.721c.09.094.09.094.19.188C1617.41 35.13 1626 53.734 1626 74.321Z"
              />
              <path
                fill="url(#c)"
                d="m748.217 79.893-201.055 233.54-120.028 139.388-53.262-84.048 230.613-267.915 143.732-20.965Z"
              />
            </g>
            <defs>
              <linearGradient
                id="a"
                x1={12.654}
                x2={816.288}
                y1={166.207}
                y2={-23.338}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF85" />
                <stop offset={0.75} stopColor="#F2F005" />
              </linearGradient>
              <linearGradient
                id="b"
                x1={450.838}
                x2={1862.64}
                y1={430.629}
                y2={-244.35}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF85" />
                <stop offset={0.592} stopColor="#F2F005" />
              </linearGradient>
              <linearGradient
                id="c"
                x1={236.882}
                x2={877.711}
                y1={654.623}
                y2={199.884}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0.478} stopColor="#F2F005" />
                <stop offset={0.896} stopColor="#00FF85" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </main>

      <section id="nosostros" className="pt-10 md:pt-24 lg:pt-0">
        <Feature
          inverse
          left={
            <>
              <Badge color="secondary" className="mb-7">
                Quienes somos
              </Badge>
              <h2 className="mb-6 text-4xl font-semibold lg:text-4xl xl:text-5xl">
                Confianza y Seguridad Digital con{' '}
                <em className="not-italic text-blue-600">FirmaGo</em>.
              </h2>

              <p className="text-lg">
                En FirmaGo, estamos comprometidos con la seguridad digital y la
                eficiencia empresarial. Nuestros certificados digitales están
                diseñados para garantizar la autenticidad, confidencialidad e
                integridad de sus transacciones electrónicas.
              </p>
            </>
          }
          right={
            <div className="relative grid place-content-center lg:-mx-10 lg:px-20 lg:py-20 xl:px-28 xl:py-32 2xl:px-28">
              <Image
                src={Graphic4}
                alt=""
                fill
                className="hidden object-cover object-center md:block"
              />
              <div className="relative z-10">
                <Image
                  src={IllustrationQuienesSomos}
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          }
        />
      </section>
      <section id="soluciones" className="py-20">
        <Feature
          left={
            <>
              <Badge color="secondary" className="mb-7">
                Soluciones
              </Badge>
              <h2 className="mb-5 text-4xl font-semibold lg:text-4xl xl:text-5xl">
                Certificación Digital{' '}
                <em className="not-italic text-blue-600">(Emisión)</em>.
              </h2>

              <p className="mb-5 text-lg">
                Firme documentos importantes directamente desde tu dispositivo
                móvil con total seguridad y conveniencia.
              </p>

              <Button
                href=""
                icon="secondary"
                size={'lg'}
                isOutline
                isPill
                asLink
              >
                Saber más
              </Button>
            </>
          }
          right={
            <>
              <Image src={IllustrationSoluciones} alt="" />
            </>
          }
        />
      </section>
      <section id="certificacion-digital" className="">
        <Feature
          inverse
          left={
            <>
              <Badge color="secondary" className="mb-7">
                Certificación Digital
              </Badge>
              <h2 className="mb-5 text-4xl font-semibold lg:text-4xl xl:text-5xl">
                Firmá digitalmente de forma rápida, segura y{' '}
                <em className="not-italic text-blue-600">eficiente</em>.
              </h2>

              <div className="mb-10 flex flex-col gap-8 lg:mt-10 lg:flex-row">
                <div>
                  <Image src={FileIcon} alt="" />
                  <h3 className="mb-3 mt-4 text-xl font-bold">Autenticidad</h3>
                  <p className="text-sm font-medium">
                    Con nuestros certificados digitales, puede verificar la
                    identidad de los firmantes, asegurando que las transacciones
                    y comunicaciones sean legítimas y confiables.
                  </p>
                </div>
                <div>
                  <Image src={ConnectionIcon} alt="" />
                  <h3 className="mb-3 mt-4 text-xl font-bold">
                    Confidencialidad
                  </h3>
                  <p className="text-sm font-medium">
                    Proteja la información sensible contra accesos no
                    autorizados. Nuestros certificados aseguran que solo las
                    partes autorizadas puedan acceder a los datos.
                  </p>
                </div>
              </div>
            </>
          }
          right={
            <div className="relative -mx-4 grid place-content-center overflow-hidden px-5 py-32 md:mx-0 xl:py-48 2xl:py-60">
              <Image
                alt=""
                src={Graphic3}
                fill
                className="absolute bottom-0 left-0 right-0 top-0 object-cover object-top"
              />

              <div className="relative z-10 max-w-xs rounded-lg bg-blue-900 p-5 py-10 text-center text-white">
                <p className="text-lg font-semibold">Certificación Digital</p>
                <p className="mb-5 mt-4 text-5xl font-semibold">$99</p>
                <p className="mb-8">
                  Válido por 1 año después de la activación del certificado
                </p>
                <Button color={'white'} icon={'secondary'} isPill isBlock>
                  Solicitar un certificado
                </Button>
              </div>
            </div>
          }
        />
      </section>
      <section
        id="contacto"
        className="space-y-20 bg-blue-900 py-16 text-white"
      >
        <Feature
          left={
            <>
              <Badge color="white" className="mb-7">
                Contáctanos
              </Badge>
              <h2 className="mb-7 text-4xl font-semibold lg:text-5xl xl:text-6xl">
                Protegiendo el{' '}
                <em className="relative inline-flex not-italic">
                  <span className="relative z-10">futuro</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 167 76"
                    className="absolute bottom-0 left-0 right-0 top-0"
                  >
                    <path
                      stroke="#0043F4"
                      strokeLinejoin="round"
                      strokeWidth={28}
                      d="M3 30.831 102.484 14 53.888 62 163 35.195"
                    />
                  </svg>
                </em>{' '}
                digital de tu negocio.
              </h2>
              <Button
                href=""
                icon="secondary"
                size={'lg'}
                isOutline
                isPill
                asLink
              >
                Contáctenos
              </Button>
              <p className="mb-2 mt-7 text-2xl font-medium">
                <em className="not-italic text-yellow-300">contacto</em>
                @firmago.com
              </p>
              <p className="text-lg">+595 21 123 4567</p>
            </>
          }
          right={
            <>
              <Image src={IllustrastionContacto} alt="" />
            </>
          }
        />
      </section>

      <div className="container mx-auto">
        <div className="mt-10 grid grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert.id} className="p-5">
              <p>{cert.type}</p>
              {cert.title.includes(' en ') ? (
                <>
                  <p>{cert.title.split(' en ')[0]}</p>
                  <p>{`en ${cert.title.split(' en ')[1]}`}</p>
                </>
              ) : (
                <p>{cert.title}</p>
              )}
              <p>{cert.price}</p>
              <p>{cert.validity}</p>
              <ul className="ml-5 list-disc">
                {cert.description.split('\n\n').map((item, index) => (
                  <li key={`cert-${cert.id}-item-${index}`}>{item}</li>
                ))}
              </ul>
              <p className="mt-10">{cert.additionalInfo}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer className="2xl:hidden" />
      <Footer compact className="hidden 2xl:block" />
    </>
  )
}
