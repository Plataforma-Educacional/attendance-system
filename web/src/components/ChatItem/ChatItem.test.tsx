import { render } from '@redwoodjs/testing/web'

import ChatItem from './ChatItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatItem />)
    }).not.toThrow()
  })
})
