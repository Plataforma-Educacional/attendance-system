import type { ComponentMeta } from '@storybook/react'

import ChatIntro from 'src/components/ChatIntro/ChatIntro'
import AttendanceLayout from 'src/layouts/AttendanceLayout/AttendanceLayout'

import ChatslistPage from './ChatslistPage'

export const alone = () => {
  return <ChatslistPage />
}
export const attendance = () => {
  return (
    <AttendanceLayout>
      <ChatslistPage>
        <ChatIntro />
      </ChatslistPage>
    </AttendanceLayout>
  )
}
export default {
  title: 'Pages/ChatslistPage',
  component: ChatslistPage,
} as ComponentMeta<typeof ChatslistPage>
