import type { FindChatQuery, FindChatQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChatDisplay from '../ChatDisplay/ChatDisplay'
import ChatInformation from '../ChatInformation/ChatInformation'

export const QUERY = gql`
  query FindChatQuery($id: Int!) {
    chat: chat(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindChatQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  chat,
}: CellSuccessProps<FindChatQuery, FindChatQueryVariables>) => {
  return (
    <>
      <div className="flex-1">
        <ChatDisplay chat={chat} />
      </div>
      <ChatInformation chat={chat} />
    </>
  )
}
