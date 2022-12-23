import type { ComponentMeta } from '@storybook/react'

import AttendanceLayout from 'src/layouts/AttendanceLayout/AttendanceLayout'

import ChatPage from './ChatPage'

export const generated = () => {
  return <ChatPage />
}
export const Attendance = () => {
  return (
    <AttendanceLayout>
      <ChatPage />
    </AttendanceLayout>
  )
}
export default {
  title: 'Pages/ChatPage',
  component: ChatPage,
} as ComponentMeta<typeof ChatPage>
