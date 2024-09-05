import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'
import { buttonSizeMap } from '@/styles/button'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof Button>
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ButtonProps> = {
  title: '공통/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: 'radio', options: Object.keys(buttonSizeMap) },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: '360px', textAlign: 'center' }}>{Story()}</div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    weak: false,
    full: false,
    disabled: false,
    children: 'button',
  },
}

export const Weak: Story = {
  args: {
    ...Default.args,
    weak: true,
  },
}

export const Full: Story = {
  args: {
    ...Default.args,
    full: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
