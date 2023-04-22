type DataType = {
  id: number;
  topic: string;
  icons: {
    id: number;
    desc: string;
  }[];
};

export const basePath = 'src/assets/htmls/images';

export const iconData: DataType[] = [
  {
    id: 0,
    topic: `정치`,
    icons: [
      {
        id: 0,
        desc: `thanks`,
      },
      {
        id: 1,
        desc: `cool`,
      },
      {
        id: 2,
        desc: `funny`,
      },
      {
        id: 3,
        desc: `angry`,
      },
      {
        id: 4,
        desc: `sad`,
      },
      {
        id: 5,
        desc: `embarrased`,
      },
    ],
  },
  {
    id: 1,
    topic: `경제`,
    icons: [
      {
        id: 0,
        desc: `good`,
      },
      {
        id: 1,
        desc: `thanks`,
      },
      {
        id: 2,
        desc: `ok`,
      },
      {
        id: 3,
        desc: `envy`,
      },
      {
        id: 4,
        desc: `angry`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `embarrased`,
      },
    ],
  },
];
