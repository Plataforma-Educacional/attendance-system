import { Chat } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  chat: Chat
}
const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parseDate = new Date(datetime)
  const month = parseDate.toLocaleString('default', { month: 'long' })
  return `${parseDate.getDate()} ${month} ${parseDate.getFullYear()}`
}
const ChatTable = ({ chat }: Props) => {
  return (
    <Link to={routes.chat({ id: chat.id })}>
      <div className="grid grid-cols-6  hover:bg-[#abc3ff8e]">
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
          {chat.user.name}
        </div>
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
          {chat.user.email}
        </div>
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
          {chat.user.name}
        </div>
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
          {chat.duration} min
        </div>
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
          {chat.status}
        </div>
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
          {formattedDate(chat.date)}
        </div>
      </div>
    </Link>
  )
}

export default ChatTable
