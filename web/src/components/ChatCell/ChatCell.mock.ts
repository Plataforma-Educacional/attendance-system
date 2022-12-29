// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  chat: {
    id: 42,
    name: 'Patrick',
    client: {
      email: 'Patrick@gmail.com',
    },
    user: {
      name: 'Bob Esponja',
    },
    duration: 6,
    status: 'active',
    date: '2022-07-14T10:02:37.005Z',
    messages: [
      {
        user_id: 42,
        message: "Hey, Bob! What's up?",
      },
      {
        user_id: 1,
        message:
          'Not much, Patrick. Just hanging out at the Krusty Krab, as usual. How about you?',
      },
      {
        user_id: 42,
        message:
          'Same old, same old. Just lounging on the rock, enjoying the sunshine.',
      },
      {
        user_id: 1,
        message:
          "Yeah, it's a great day for a little relaxing. Hey, have you heard about that new burger place that just opened up in town?",
      },
      {
        user_id: 42,
        message: "No, I haven't. What's it called?",
      },
      {
        user_id: 1,
        message:
          "It's called the Chum Bucket. I heard they have some pretty good burgers.",
      },
      {
        user_id: 42,
        message:
          "Really? I'll have to check it out. I'm always up for trying a new burger place.",
      },
      {
        user_id: 1,
        message:
          'Yeah, me too. Maybe we can go check it out together sometime.',
      },
      {
        user_id: 42,
        message: 'Sounds like a plan! See you later, Bob.',
      },
      {
        user_id: 1,
        message: 'See you later, Patrick.',
      },
    ],
  },
})
