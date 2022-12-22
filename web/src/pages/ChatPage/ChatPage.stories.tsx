import type { ComponentMeta } from '@storybook/react'

import ChatPage from './ChatPage'

export const generated = () => {
  return <ChatPage />
}

export default {
  title: 'Pages/ChatPage',
  component: ChatPage,
} as ComponentMeta<typeof ChatPage>
