import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AttendanceLayout from './AttendanceLayout'

export const generated: ComponentStory<typeof AttendanceLayout> = (args) => {
  return <AttendanceLayout {...args} />
}

export default {
  title: 'Layouts/AttendanceLayout',
  component: AttendanceLayout,
} as ComponentMeta<typeof AttendanceLayout>
