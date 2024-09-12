import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import Input from './Input'

type InputProps = ComponentProps<typeof Input>
const meta: Meta<InputProps> = {
  title: '공통/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    'aria-invalid': {
      control: 'boolean',
      defaultValue: false,
      description: 'Invalid data',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-invalid': false,
    placeholder: 'default input',
  },
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    'aria-invalid': true,
    placeholder: 'Invalid...',
  },
}
