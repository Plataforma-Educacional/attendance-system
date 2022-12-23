import type { ChatsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ChatsQuery {
    chats {
      id
      name
      client
      user
      duration
      status
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ chats }: CellSuccessProps<ChatsQuery>) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="border-b-2 border-r-2 border-[#5766da7e] py-3  text-center">
          Nome
        </div>
        <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
          E-mail
        </div>
        <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
          Atendente
        </div>
        <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
          Duração
        </div>
        <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
          Status
        </div>
        <div className="border-b-2 border-r-2 border-[#5766da7e] py-3 text-center">
          Data da chamada
        </div>
      </div>

      {chats.map((item) => {
        return (
          <div className="grid grid-cols-6" key={item.id}>
            <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
              {item.name}
            </div>
            <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
              {item.client.email}
            </div>
            <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
              {item.user.name}
            </div>
            <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
              {item.duration} min
            </div>
            <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
              {item.status}
            </div>
            <div className="border-r-2 border-b-2 border-[#5766da7e] py-3 text-center">
              {item.date}
            </div>
          </div>
        )
      })}
    </>
  )
}
