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
    <div className="group flex hover:bg-[#5766DA]">
      <div className=" flex p-1 align-middle">
        {chat.user.pfp === '' && (
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
        )}
        {chat.user.pfp !== '' && (
          <img
            src={chat.user.pfp}
            alt={chat.user.name}
            className=" h-14 w-16 rounded-full object-cover object-center"
          />
        )}
      </div>
      <div className="w-full border-t-2 border-[#5766da7e] py-1 px-2 group-hover:border-[#5766DA] ">
        <div className="flex justify-between">
          <div className="mr-10 text-lg font-semibold group-hover:text-white">
            {chat.user.name}
          </div>
          <div className="font-light text-slate-500 group-hover:text-white">
            {formattedDate(chat.messages[chat.messages.length - 1].data)}
          </div>
        </div>
        <div className="text-slate-500 group-hover:text-white">
          <p>{truncate(chat.messages[chat.messages.length - 1].message, 45)}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatItem
