import { render } from '@redwoodjs/testing/web'

import ChatDisplay from './ChatDisplay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatDisplay />)
    }).not.toThrow()
  })
})
