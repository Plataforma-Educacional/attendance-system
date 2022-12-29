import { render } from '@redwoodjs/testing/web'

import ChatInformation from './ChatInformation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatInformation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatInformation />)
    }).not.toThrow()
  })
})
