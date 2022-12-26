import { MetaTags } from '@redwoodjs/web'

import ChatDisplay from 'src/components/ChatDisplay/ChatDisplay'

const ChatslistPage = () => {
  return (
    <>
      <MetaTags title="Chatslist" description="Chatslist page" />
      <div className="flex h-full w-full  bg-white">
        <div className="flex-1">
          <h2 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
            Conversas
          </h2>
        </div>
        <div className="flex-1">
          <ChatDisplay />
        </div>

        <div className="flex-1">
          <h2 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
            Conversas
          </h2>
        </div>
      </div>
    </>
  )
}

export default ChatslistPage
