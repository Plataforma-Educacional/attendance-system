import { render } from '@redwoodjs/testing/web'

import AttendanceLayout from './AttendanceLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AttendanceLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendanceLayout />)
    }).not.toThrow()
  })
})
