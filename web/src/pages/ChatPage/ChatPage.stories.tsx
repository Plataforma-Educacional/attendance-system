import type { ComponentMeta } from '@storybook/react'

import AttendanceLayout from 'src/layouts/AttendanceLayout/AttendanceLayout'

import ChatslistPage from '../ChatslistPage/ChatslistPage'

import ChatPage from './ChatPage'

export const alone = () => {
  return <ChatPage />
}
export const Attendance = () => {
  return (
    <AttendanceLayout>
      <ChatslistPage>
        <ChatPage />
      </ChatslistPage>
    </AttendanceLayout>
  )
}
export default {
  title: 'Pages/ChatPage',
  component: ChatPage,
} as ComponentMeta<typeof ChatPage>
