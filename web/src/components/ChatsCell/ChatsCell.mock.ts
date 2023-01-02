// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  chats: [
    {
      id: 42,
      client: 'Fenda do biquini',
      user: {
        name: 'Patrick Estrela',
        pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElcuslt829M4GRunQB4d_XR1CCtwIVaM2Bw&usqp=CAU',
        email: 'Patrick@example.com',
        cell: '0-X5x12A-6345',
        role: 'Monitor',
      },
      duration: 6,
      status: 'active',
      date: '2022-07-14T10:02:37.005Z',
      messages: [
        {
          user_id: 42,
          message: "Hey, Bob! What's up?",
          data: '2022-10-14T17:49:37.005Z',
        },
        {
          user_id: 1,
          message:
            'Not much, Patrick. Just hanging out at the Krusty Krab, as usual. How about you?',
          data: '2022-10-14T17:50:37.005Z',
        },
        {
          user_id: 42,
          message:
            'Same old, same old. Just lounging on the rock, enjoying the sunshine.',
          data: '2022-10-14T17:52:37.005Z',
        },
        {
          user_id: 1,
          message:
            "Yeah, it's a great day for a little relaxing. Hey, have you heard about that new burger place that just opened up in town?",

          data: '2022-10-14T17:53:37.005Z',
        },
        {
          user_id: 42,
          message: "No, I haven't. What's it called?",
          data: '2022-10-14T17:55:37.005Z',
        },
        {
          user_id: 1,
          message:
            "It's called the Chum Bucket. I heard they have some pretty good burgers.",
          data: '2022-10-14T18:10:37.005Z',
        },
        {
          user_id: 42,
          message:
            "Really? I'll have to check it out. I'm always up for trying a new burger place.",
          data: '2022-10-14T18:15:37.005Z',
        },
        {
          user_id: 1,
          message:
            'Yeah, me too. Maybe we can go check it out together sometime.',
          data: '2022-10-14T18:19:37.005Z',
        },

        {
          user_id: 42,
          message: 'Sounds like a plan! See you later, Bob.',
          data: '2022-10-14T18:20:37.005Z',
        },
        {
          user_id: 1,
          message: 'See you later, Patrick.',
          data: '2022-10-14T18:22:37.005Z',
        },
      ],
    },
    {
      id: 43,
      client: 'Fenda do biquini',
      user: {
        name: 'Sandy',
        pfp: '',
        email: 'esquilo@example.com',
        cell: '0-X5x12A-1515',
        role: 'Monitor',
      },
      duration: 6,
      status: 'active',
      date: '2022-07-14T10:02:37.005Z',
      messages: [
        {
          user_id: 42,
          message: "Hey, Bob! What's up?",
          data: '2022-10-14T17:49:37.005Z',
        },
        {
          user_id: 1,
          message:
            'Not much, Patrick. Just hanging out at the Krusty Krab, as usual. How about you?',
          data: '2022-10-14T17:50:37.005Z',
        },
        {
          user_id: 42,
          message:
            'Same old, same old. Just lounging on the rock, enjoying the sunshine.',
          data: '2022-10-14T17:52:37.005Z',
        },
        {
          user_id: 1,
          message:
            "Yeah, it's a great day for a little relaxing. Hey, have you heard about that new burger place that just opened up in town?",

          data: '2022-10-14T17:53:37.005Z',
        },
        {
          user_id: 42,
          message: "No, I haven't. What's it called?",
          data: '2022-10-14T17:55:37.005Z',
        },
        {
          user_id: 1,
          message:
            "It's called the Chum Bucket. I heard they have some pretty good burgers.",
          data: '2022-10-14T18:10:37.005Z',
        },
        {
          user_id: 42,
          message:
            "Really? I'll have to check it out. I'm always up for trying a new burger place.",
          data: '2022-10-14T18:15:37.005Z',
        },
        {
          user_id: 1,
          message:
            'Yeah, me too. Maybe we can go check it out together sometime.',
          data: '2022-10-14T18:19:37.005Z',
        },

        {
          user_id: 42,
          message: 'Sounds like a plan! See you later, Bob.',
          data: '2022-10-14T18:20:37.005Z',
        },
        {
          user_id: 1,
          message: 'See you later, Patrick.',
          data: '2022-10-14T18:22:37.005Z',
        },
      ],
    },
  ],
})
