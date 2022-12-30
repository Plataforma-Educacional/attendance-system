interface Props {
  chat: {
    id: number
    client: string
    user: {
      name: string
      email: string
      cell: string
      role: number
      pfp: string
    }
  }
}

const ChatInformation = ({ chat }: Props) => {
  return (
    <div className="flex-1  justify-center border-r-2 border-[#5766da7e]">
      <div className="h-[56px] border-l-2 border-white bg-[#5766DA] text-2xl font-medium text-white"></div>
      <div className="py-2 px-4  text-center text-slate-600">
        <div className="flex justify-center">
          <img
            src={chat.user.pfp}
            alt={chat.user.name}
            className="h-60 w-60 rounded-full object-cover object-center"
          />
        </div>

        <h2 className="text-lg font-semibold text-slate-700 ">
          {chat.user.name}
        </h2>
        <div className="text-md font-medium text-slate-700 ">
          {chat.user.role}
        </div>
        <div>{chat.user.email}</div>
        <div>{chat.user.cell}</div>
      </div>
    </div>
  )
}

export default ChatInformation
