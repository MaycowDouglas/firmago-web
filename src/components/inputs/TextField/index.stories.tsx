import { Meta } from '@storybook/react'

import { TextField } from './index'

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta

export const All = () => (
  <div className="space-y-5">
    <TextField />
    <hr />
    <TextField label="Correo eletrónico" required />
    <hr />
    <TextField
      label="Correo eletrónico"
      required
      placeholder="example@example.com"
    />
    <hr />
    <TextField
      type="email"
      label="Correo eletrónico"
      placeholder="example@example.com"
      helperText="example@example"
      required
    />
    <hr />
    <TextField
      type="email"
      label="Correo eletrónico"
      placeholder="example@example.com"
      helperText="Campo obrigatório"
      hasError
      required
    />
    <hr />
    <TextField isSecret label="Senha" />
  </div>
)
