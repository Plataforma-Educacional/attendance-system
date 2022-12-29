import { Chat } from 'types/graphql'

import { Form, TextField } from '@redwoodjs/forms'

import ChatBallon from '../ChatBallon/ChatBallon'

interface Props {
  chat: Chat
}
const ChatDisplay = ({ chat }: Props) => {
  return (
    <>
      <section className="flex h-full flex-col">
        <div className="flex border-l-2 border-white bg-[#5766DA] px-2 py-1 align-middle text-2xl font-medium text-white">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
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
          <div className="ml-2 flex-1">
            <div className="text-lg">{chat.name}</div>
            <div className="text-sm">Online</div>
          </div>

          <button className="my-2 rounded bg-[#A3ECB8] px-2 text-center align-middle text-base text-[#053F04]">
            Aberta
          </button>
        </div>
        <div className=" flex-1 overflow-y-auto border-x-2 border-[#5766da7e] py-5 px-8">
          {chat.messages.map((m, i: number) => {
            return (
              <div key={i}>
                <ChatBallon
                  message={m.message}
                  user={1}
                  data={'19:00'}
                  author={m.user_id}
                />
              </div>
            )
          })}
        </div>
        <div className="flex h-[67px] items-center bg-[#5766DA]">
          <div className="pl-3 text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-emoji-laughing"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
            </div>
          </div>
          <Form className="flex-1 p-3">
            <TextField
              name="message"
              className=" h-[40px] w-full rounded-md border-0  outline-0"
            />
          </Form>
          <div className="pr-3 text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChatDisplay
