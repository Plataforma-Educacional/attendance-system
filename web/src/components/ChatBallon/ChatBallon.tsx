interface Props {
  user: number
  author: number
  message: string
  data: string
}

const ChatBallon = ({ message, user, author, data }: Props) => {
  return (
    <div
      className="mb-2.5 flex"
      style={{
        justifyContent: user === author ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        className="flex max-w-[80%] flex-col rounded-xl p-2 shadow-lg"
        style={{
          backgroundColor: user === author ? '#D5D8EF' : '#e9e9e9',
        }}
      >
        <div className="relative mr-10 ml-1.5 mb-1.5  mt-1.5 text-sm">
          {message}
          <span
            style={{
              display: 'block',
              position: 'absolute',
              width: '0',
              height: '0',

              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              top: '0',
            }}
            className={`${
              user === author
                ? 'right-[-60px] border-l-[15px] border-[#D5D8EF]'
                : 'left-[-25px] border-r-[15px] border-[#e9e9e9]'
            }`}
          ></span>
        </div>
        <div className="mr-1.5 mt-[-15px] h-4 text-right text-xs text-[#999]">
          {data}
        </div>
      </div>
    </div>
  )
}

export default ChatBallon
