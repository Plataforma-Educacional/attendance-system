// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChatDisplay> = (args) => {
//   return <ChatDisplay {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChatDisplay from './ChatDisplay'

export const generated = () => {
  return <ChatDisplay />
}

export default {
  title: 'Components/ChatDisplay',
  component: ChatDisplay,
} as ComponentMeta<typeof ChatDisplay>
