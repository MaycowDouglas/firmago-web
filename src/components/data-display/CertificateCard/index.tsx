import { Certificate } from '@/types/certificate'

type Props = {
  certificate: Certificate
}

export const CertificateCard = ({ certificate }: Props) => {
  return (
    <div>
      <div>{certificate.type}</div>
    </div>
  )
}
