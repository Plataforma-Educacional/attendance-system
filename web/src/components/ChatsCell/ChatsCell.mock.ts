// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  chats: [
    {
      id: 42,
      name: 'Patrick',
      client: {
        email: 'TesteEmail@gmail.com',
      },
      user: {
        name: 'Fulano',
      },
      duration: 6,
      status: 'active',
      date: '2022-10-14T18:22:37.005Z',
      messages:
        ' Proin commodo, nunc ac ultricies ullamcorper, erat felis commodo elit, mollis efficitur purus arcu at ipsum.',
    },
    {
      id: 43,
      name: 'Teste2',
      client: {
        email: 'TesteEmail@gmail.com',
      },
      user: {
        name: 'Fulano',
      },
      duration: 3,
      status: 'active',
      date: '2022-02-11T13:56:37.005Z',
      messages: 'Nulla et nisi dui. Integer a blandit neque. ',
    },
    {
      id: 44,
      name: 'Teste3',
      client: {
        email: 'TesteEmail@gmail.com',
        messages: 'Nullam et pellentesque ante. Nulla facilisis aliquet quam',
      },
      user: {
        name: 'Fulano',
      },
      duration: 35,
      status: 'active',
      date: '2022-12-14T16:10:37.005Z',
      messages:
        'Duis tincidunt, eros sed semper suscipit, dolor diam interdum dolor, id placerat odio lorem in elit',
    },
    {
      id: 45,
      name: 'Teste4',
      client: {
        email: 'TesteEmail@gmail.com',
      },
      user: {
        name: 'Fulano',
      },
      duration: 15,
      status: 'active',
      date: '2022-12-14T03:53:37.005Z',
      messages:
        'Donec vitae quam ultrices lacus finibus laoreet nec finibus mauris.',
    },
    {
      id: 42,
      name: 'Teste5',
      client: {
        email: 'TesteEmail@gmail.com',
      },
      user: {
        name: 'Fulano',
      },
      duration: 6,
      status: 'active',
      date: '2022-07-14T10:02:37.005Z',
      messages: 'Fusce eleifend dignissim risus eget consectetur.',
    },
  ],
})
