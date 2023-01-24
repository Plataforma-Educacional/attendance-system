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
      <div className="group flex items-center justify-center space-x-10 border-l-2 border-white py-4 pl-2.5 pr-1.5 hover:bg-[#5766DA] ">
        <div className=" flex h-[60px] min-w-[400px] ">
          <div className="flex h-16 w-16 items-center justify-center ">
            <div className="fill-[#5766DA] group-hover:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="bi bi-person-circle rounded-full bg-[#ABC3FF] group-hover:bg-[#5766DA]"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className=" text-lg group-hover:text-white">
              {chat.user.name}
            </div>
            <div className="align-top text-base font-light group-hover:text-white">
              {chat.user.email}
            </div>
          </div>
        </div>
        <div className="h-full flex-1 text-lg group-hover:text-white">
          {chat.duration} minutos
        </div>
        <div className="h-full flex-1 group-hover:text-white ">...</div>
        <div className="h-full min-w-[250px] group-hover:text-white">...</div>
        <div className=" h-full flex-1">
          {chat.status === 'active' && (
            <div className="text-053F04 rounded-full bg-[#A3ECB8] px-5 py-2.5 text-center text-lg font-bold">
              Aberto
            </div>
          )}
        </div>
        <div className="h-full flex-1 text-lg group-hover:text-white">
          {formattedDate(chat.date)}
        </div>
      </div>
    </Link>
  )
}

export default ChatTable
