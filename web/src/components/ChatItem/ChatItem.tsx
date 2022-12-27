import { Chat } from 'types/graphql'

interface Props {
  chat: Chat
}
const truncate = (teste: string, length: number) => {
  return teste.length > length ? teste.substring(0, length) + '...' : teste
}
const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parseDate = new Date(datetime)
  const month = parseDate.toLocaleString('default', { month: 'long' })
  return `${parseDate.getHours()}:${parseDate.getMinutes()} ${parseDate.getDate()} ${month} ${parseDate.getFullYear()}`
}
const ChatItem = ({ chat }: Props) => {
  return (
    <div className="flex border-b-2 border-[#5766da7e] hover:bg-[#abc3ff8e]">
      <div className=" p-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>
      <div className="w-full py-1 px-2">
        <div className="flex justify-between">
          <div className="text-lg font-semibold">{chat.name}</div>
          <div className="font-light text-slate-500">
            {formattedDate(chat.date)}
          </div>
        </div>
        <div className="text-slate-500">
          <p>{truncate(chat.messages, 45)}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatItem
