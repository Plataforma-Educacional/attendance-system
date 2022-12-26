import { MetaTags } from '@redwoodjs/web'

import ChatsCell from 'src/components/ChatsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="border-l-2 border-white bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
        Caixa de entrada
      </h1>
      <div className="h-full bg-white">
        <ChatsCell />
      </div>
    </>
  )
}

export default HomePage
