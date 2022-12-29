import { render } from '@redwoodjs/testing/web'

import ChatBallon from './ChatBallon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatBallon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatBallon />)
    }).not.toThrow()
  })
})
