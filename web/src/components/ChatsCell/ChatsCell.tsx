import type { ChatsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChatItem from '../ChatItem/ChatItem'
import ChatTable from '../ChatTable/ChatTable'

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
      messages
    }
  }
`
interface Props {
  type: string
}
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  chats,
  type,
}: CellSuccessProps<ChatsQuery, Props>) => {
  return (
    <>
      {chats.map((item) => {
        return type === 'home' ? (
          <ChatTable chat={item} key={item.id} />
        ) : (
          <Link to={routes.chat({ id: item.id })}>
            <ChatItem chat={item} key={item.id} />
          </Link>
        )
      })}
    </>
  )
}
