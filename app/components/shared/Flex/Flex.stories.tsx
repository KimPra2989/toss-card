import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import Flex from './Flex'

type FlexProps = ComponentProps<typeof Flex>
const meta: Meta<FlexProps> = {
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
