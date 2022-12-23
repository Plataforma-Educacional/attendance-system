import { MetaTags } from '@redwoodjs/web'

import ChatsCell from 'src/components/ChatsCell'

const ChatslistPage = () => {
  return (
    <>
      <MetaTags title="Chatslist" description="Chatslist page" />

      <h1 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
        Conversas
      </h1>
      <div className="grid h-[100%] w-[100%] grid-cols-3 bg-white">
        <ChatsCell />
      </div>
    </>
  )
}

export default ChatslistPage
