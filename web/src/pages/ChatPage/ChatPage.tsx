import { MetaTags } from '@redwoodjs/web'

const ChatPage = () => {
  return (
    <>
      <MetaTags title="Chat" description="Chat page" />

      <h1 className="font-medium text-2xl px-2 py-3 border-l-2 border-white text-white bg-[#5766DA]">
        Conversas
      </h1>
      <div className="w-[100%] h-[100%] bg-white"></div>
    </>
  )
}

export default ChatPage
