import { Meta, StoryObj } from '@storybook/react'

import { CertificateCard } from './index'

const meta = {
  title: 'CertificateCard',
  component: CertificateCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CertificateCard>

export default meta
type Story = StoryObj<typeof CertificateCard>

export const Default: Story = {
  args: {
    certificate: {
      id: 1,
      type: 'F1',
      title: 'Tributario Cualificado',
      price: 250000.0,
      validity: 730,
      description:
        'Sistema Integrado de Facturación Electrónica Nacional\n' +
        '\n' +
        'Es fundamental para garantizar la conformidad tributaria y la seguridad de las transacciones electrónicas relacionadas con impuestos.\n' +
        '\n' +
        'Necesario para empresas e individuos que necesitan interactuar electrónicamente con autoridades fiscales de forma segura y legalmente válida.',
      additionalInfo:
        'Necesario para empresas e individuos que interactúan electrónicamente con documentos de forma segura y legal.',
    },
  },
}
