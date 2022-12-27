import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import ChatDisplay from 'src/components/ChatDisplay/ChatDisplay'
import ChatIntro from 'src/components/ChatIntro/ChatIntro'
import ChatsCell from 'src/components/ChatsCell'

const ChatslistPage = () => {
  const [activeChat, setActiveChat] = useState(undefined)
  return (
    <>
      <MetaTags title="Chatslist" description="Chatslist page" />
      <div className="flex h-full w-full  border-b-2 border-[#5766da7e] bg-white">
        <div className="flex-3">
          <h2 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
            Conversas
          </h2>
          <ChatsCell type="list" />
        </div>

        <div className="flex-1">
          {activeChat && <ChatDisplay />}
          {!activeChat && <ChatIntro />}
        </div>
        {activeChat && (
          <div className="flex-1">
            <h2 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
              Conversas
            </h2>
          </div>
        )}
      </div>
    </>
  )
}

export default ChatslistPage
