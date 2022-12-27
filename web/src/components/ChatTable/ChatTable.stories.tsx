// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChatTable> = (args) => {
//   return <ChatTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChatTable from './ChatTable'

export const generated = () => {
  return <ChatTable />
}

export default {
  title: 'Components/ChatTable',
  component: ChatTable,
} as ComponentMeta<typeof ChatTable>
