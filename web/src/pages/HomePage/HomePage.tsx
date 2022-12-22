import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="font-medium text-2xl px-2 py-3 border-l-2 border-white text-white bg-[#5766DA]">
        Caixa de entrada
      </h1>
      <div className="w-[100%] h-[100%] bg-white"></div>
    </>
  )
}

export default HomePage
