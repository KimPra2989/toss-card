import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps, ReactNode } from 'react'
import Flex, { FlexBaseProps } from './Flex'

const meta: Meta<FlexBaseProps & { children: ReactNode }> = {
  title: '공통/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: { control: 'radio', options: ['row', 'column'] },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    align: 'center',
    justify: 'center',
    direction: 'row',
    gap: 6,
    children: (
      <>
        <div style={{ border: '1px solid black', padding: '6px' }}>first</div>
        <div style={{ border: '1px solid black', padding: '6px' }}>second</div>
        <div style={{ border: '1px solid black', padding: '6px' }}>third</div>
      </>
    ),
  },
}

export const Column: Story = {
  args: {
    ...Default.args,
    direction: 'column',
  },
}
