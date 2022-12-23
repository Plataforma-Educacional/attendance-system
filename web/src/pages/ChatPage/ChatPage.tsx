import { MetaTags } from '@redwoodjs/web'

const ChatPage = () => {
  return (
    <>
      <MetaTags title="Chat" description="Chat page" />

      <h1 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
        Conversas
      </h1>
      <div className="h-[100%] w-[100%] bg-white"></div>
    </>
  )
}

export default ChatPage
