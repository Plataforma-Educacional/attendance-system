// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Gridcell> = (args) => {
//   return <Gridcell {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Gridcell from './Gridcell'

export const generated = () => {
  return <Gridcell />
}

export default {
  title: 'Components/Gridcell',
  component: Gridcell,
} as ComponentMeta<typeof Gridcell>
