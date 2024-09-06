import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import InputField from './InputField'

type InputFieldProps = ComponentProps<typeof InputField>
const meta: Meta<InputFieldProps> = {
  title: '공통/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'label',
    hasError: false,
    helpMessage: 'help message',
  },
}

export const Error: Story = {
  args: {
    ...Default.args,
    hasError: true,
  },
}
