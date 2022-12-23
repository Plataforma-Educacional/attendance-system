import type { ComponentMeta } from '@storybook/react'

import AttendanceLayout from 'src/layouts/AttendanceLayout/AttendanceLayout'

import HomePage from './HomePage'

export const Alone = () => {
  return <HomePage />
}
export const Attendance = () => {
  return (
    <AttendanceLayout>
      <HomePage />
    </AttendanceLayout>
  )
}
export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>
