// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChatIntro> = (args) => {
//   return <ChatIntro {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChatIntro from './ChatIntro'

export const generated = () => {
  return <ChatIntro />
}

export default {
  title: 'Components/ChatIntro',
  component: ChatIntro,
} as ComponentMeta<typeof ChatIntro>
