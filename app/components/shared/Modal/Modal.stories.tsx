import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import Modal from './Modal'

type ModalProps = ComponentProps<typeof Modal>
const meta: Meta<ModalProps> = {
  title: '공통/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    Trigger: (
      <button style={{ border: '1px solid black', padding: '6px' }}>
        모달 열기
      </button>
    ),
    buttonLabel: '확인',
    children: '모달 내용입니다.',
  },
}
