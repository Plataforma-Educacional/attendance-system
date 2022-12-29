import { MetaTags } from '@redwoodjs/web'

// import ChatDisplay from 'src/components/ChatDisplay/ChatDisplay'
import ChatsCell from 'src/components/ChatsCell'

type ChatListPageProps = {
  children?: React.ReactNode
}

const ChatslistPage = ({ children }: ChatListPageProps) => {
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
        {children}
      </div>
    </>
  )
}

export default ChatslistPage
