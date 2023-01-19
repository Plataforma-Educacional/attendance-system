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
      <div className="flex space-x-10 border-l-2 border-white py-4 pl-2.5 pr-1.5 hover:bg-[#5766DA] ">
        <div className=" flex">
          <div className="h-16 w-16">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#5766DA"
                className="bi bi-person-circle rounded-full "
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
            <div> {chat.user.name}</div>
            <div> {chat.user.email}</div>
          </div>
        </div>
        <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center"></div>
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


const style = Style
