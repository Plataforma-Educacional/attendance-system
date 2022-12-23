import { render } from '@redwoodjs/testing/web'

import Gridcell from './Gridcell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Gridcell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gridcell />)
    }).not.toThrow()
  })
})
