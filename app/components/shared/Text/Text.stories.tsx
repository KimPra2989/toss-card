import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { Text } from './Text'
import { typographyMap } from '@/styles/typography'

type TextProps = ComponentProps<typeof Text>
const meta: Meta<TextProps> = {
  title: '공통/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    typography: {
      control: 'select',
      options: Object.keys(typographyMap),
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    typography: 't1',
    color: 'black',
    display: 'inherit',
    textAlign: 'inherit',
    fontWeight: 'normal',
    bold: false,
    children: 'inner Text',
  },
}
