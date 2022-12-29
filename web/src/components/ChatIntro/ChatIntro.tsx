const ChatIntro = () => {
  const navbarHeight = '56px'
  const bodyHeight = '100%'

  return (
    <div className="h-full w-full">
      <div className="block h-[56px] w-full bg-[#5766DA]"></div>
      <div
        style={{ height: `calc(${bodyHeight} - ${navbarHeight})` }}
        className="border-x-2 border-[#5766da7e]"
      ></div>
    </div>
  )
}

export default ChatIntro
