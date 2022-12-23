import { render } from '@redwoodjs/testing/web'

import ChatslistPage from './ChatslistPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChatslistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatslistPage />)
    }).not.toThrow()
  })
})
