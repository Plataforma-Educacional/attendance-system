import { MetaTags } from '@redwoodjs/web'

import ChatsCell from 'src/components/ChatsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className=" bg-[#5766DA] px-2 py-3 text-2xl font-medium text-white">
        Caixa de entrada
      </h1>
      <div className="flex h-full w-full flex-col bg-white ">
        <div className="flex space-x-10 bg-[#ABC3FF] py-4 pl-2.5 pr-1.5 text-lg font-semibold text-[#313978]">
          <div className="min-w-[400px] flex-1">Contatos</div>
          <div className="flex-1">Duração</div>
          <div className="flex-1">Agentes</div>
          <div className="min-w-[250px] flex-1">Departamento</div>
          <div className="flex-1">Status</div>
          <div className="flex-1">Criação</div>
        </div>
        <ChatsCell type={'home'} />
      </div>
    </>
  )
}

export default HomePage
