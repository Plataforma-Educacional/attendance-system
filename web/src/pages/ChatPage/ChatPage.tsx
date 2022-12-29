import { MetaTags } from '@redwoodjs/web'

import ChatCell from 'src/components/ChatCell'
// import ChatDisplay from 'src/components/ChatDisplay/ChatDisplay'

const ChatPage = () => {
  return (
    <>
      <MetaTags title="Chat" description="Chat page" />
      <ChatCell />
    </>
  )
}

export default ChatPage
