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
        <div className="grid grid-cols-6">
          <div className="border-b-2 border-r-2 border-[#5766da7e] py-3  text-center">
            Nome
          </div>
          <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
            E-mail
          </div>
          <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
            Atendente
          </div>
          <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
            Duração
          </div>
          <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
            Status
          </div>
          <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
            Data da chamada
          </div>
        </div>
        <ChatsCell type={'home'} />
      </div>
    </>
  )
}

export default HomePage
