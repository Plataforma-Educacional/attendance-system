interface Props {
  chat: {
    name: string
  }
}

const ChatInformation = ({ chat }: Props) => {
  return (
    <div className="flex-1 border-r-2 border-[#5766da7e]">
      <div className="h-[56px] border-l-2 border-white bg-[#5766DA] text-2xl font-medium text-white"></div>
      <h2>{chat.name}</h2>
    </div>
  )
}

export default ChatInformation
