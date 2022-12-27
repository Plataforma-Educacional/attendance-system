import { render } from '@redwoodjs/testing/web'

import ChatTable from './ChatTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatTable />)
    }).not.toThrow()
  })
})
