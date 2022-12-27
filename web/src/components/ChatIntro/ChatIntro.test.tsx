import { render } from '@redwoodjs/testing/web'

import ChatIntro from './ChatIntro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatIntro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatIntro />)
    }).not.toThrow()
  })
})
