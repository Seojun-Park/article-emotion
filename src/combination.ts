export type CombinationType = {
  topic: number;
  combination: {
    combo: number[];
    desc: string;
    icons?: string[];
  }[];
};

const commonCombo = [];

export const combination: CombinationType[] = [
  {
    topic: 0,
    combination: [
      {
        combo: [0, 0],
        desc: '정말 고마워요',
      },
      {
        combo: [1, 1],
        desc: '정말 멋져요',
      },
      {
        combo: [2, 2],
        desc: '정말 웃겨요',
      },
      {
        combo: [3, 3],
        desc: '정말 화나요',
      },
      {
        combo: [4, 4],
        desc: '정말 슬퍼요',
      },
      {
        combo: [5, 5],
        desc: '정말 부끄러워요',
      },
      {
        combo: [0, 1],
        desc: '고맙고 멋져요',
      },
      {
        combo: [0, 2],
        desc: '고맙고 웃겨요',
      },
      {
        combo: [0, 3],
        desc: '고맙지만 화나요',
      },
      {
        combo: [3, 0],
        desc: '화나지만 고마워요',
      },
      {
        combo: [0, 4],
        desc: '고맙지만 슬퍼요',
      },
      {
        combo: [4, 0],
        desc: '슬프지만 고마워요',
      },
      {
        combo: [0, 5],
        desc: '고맙지만 부끄러워요',
      },
      {
        combo: [5, 0],
        desc: '부끄럽지만 고마워요',
      },
      {
        combo: [1, 2],
        desc: '멋지고 웃겨요',
      },
      {
        combo: [1, 3],
        desc: '멋지지만 화나요',
      },
      {
        combo: [3, 1],
        desc: '화나지만 멋져요',
      },
      {
        combo: [1, 4],
        desc: '멋지지만 슬퍼요',
      },
      {
        combo: [4, 1],
        desc: '슬프지만 멋져요',
      },
      {
        combo: [1, 5],
        desc: '멋지지만 부끄러워요',
      },
      {
        combo: [5, 1],
        desc: '부끄럽지만 멋져요',
      },
      {
        combo: [2, 3],
        desc: '웃기지만 화나요',
      },
      {
        combo: [3, 2],
        desc: '화나지만 웃겨요',
      },
      {
        combo: [2, 4],
        desc: '웃기지만 슬퍼요',
      },
      {
        combo: [4, 2],
        desc: '슬프지만 웃겨요',
      },
      {
        combo: [2, 5],
        desc: '웃기지만 부끄러워요',
      },
      {
        combo: [5, 2],
        desc: '부끄럽지만 웃겨요',
      },
      {
        combo: [3, 4],
        desc: '화나고 슬퍼요',
      },
      {
        combo: [3, 5],
        desc: '화나고 부끄러워요',
      },
      {
        combo: [4, 5],
        desc: '슬프고 부끄러워요',
      },
    ],
  },
  {
    topic: 1,
    combination: [
      {
        combo: [0, 0],
        desc: '정말 좋아요',
      },
      {
        combo: [1, 1],
        desc: '정말 고마워요',
      },
      {
        combo: [2, 2],
        desc: '정말 괜찮아요',
      },
      {
        combo: [3, 3],
        desc: '정말 부러워요',
      },
      {
        combo: [4, 4],
        desc: '정말 화나요',
      },
      {
        combo: [5, 5],
        desc: '정말 슬퍼요',
      },
      {
        combo: [6, 6],
        desc: '정말 어의없어요',
      },
      {
        combo: [1, 0],
        desc: '고맙고 멋져요',
      },
      {
        combo: [2, 0],
        desc: '괜찮고 좋아요',
      },
      {
        combo: [3, 0],
        desc: '부럽고 좋아요',
      },
      {
        combo: [4, 0],
        desc: '화나지만 좋아요',
      },
      {
        combo: [5, 0],
        desc: '슬프지만 좋아요',
      },
      {
        combo: [6, 0],
        desc: '어의없지만 좋아요',
      },
      {
        combo: [2, 1],
        desc: '괜찮고 고마워요',
      },
      {
        combo: [3, 1],
        desc: '부럽고 고마워요',
      },
      {
        combo: [1, 4],
        desc: '고맙지만 화나요',
      },
      {
        combo: [4, 1],
        desc: '화나지만 고마워요',
      },
      {
        combo: [1, 5],
        desc: '고맙지만 슬퍼요',
      },
      {
        combo: [5, 1],
        desc: '슬프지만 고마워요',
      },
      {
        combo: [1, 6],
        desc: '고맙지만 어의없어요',
      },
      {
        combo: [6, 1],
        desc: '어의없지만 고마워요',
      },
      {
        combo: [2, 3],
        desc: '괜찮고 부러워요',
      },
      {
        combo: [2, 4],
        desc: '괜찮지만 화나요',
      },
      {
        combo: [4, 2],
        desc: '화나지만 괜찮아요',
      },
      {
        combo: [2, 5],
        desc: '괜찮지만 슬퍼요',
      },
      {
        combo: [5, 2],
        desc: '슬프지만 괜찮아요',
      },
      {
        combo: [2, 6],
        desc: '괜찮지만 어의없어요',
      },
      {
        combo: [6, 2],
        desc: '어의없지만 괜찮아요',
      },
      {
        combo: [3, 4],
        desc: '부럽지만 화나요',
      },
      {
        combo: [4, 3],
        desc: '화나지만 부러워요',
      },
      {
        combo: [3, 5],
        desc: '부럽지만 슬퍼요',
      },
      {
        combo: [5, 3],
        desc: '슬프지만 부러워요',
      },
      {
        combo: [3, 6],
        desc: '부럽지만 어의없어요',
      },
      {
        combo: [6, 3],
        desc: '어의없지만 부러워요',
      },
      {
        combo: [4, 5],
        desc: '화나고 슬퍼요',
      },
      {
        combo: [4, 6],
        desc: '화나고 어의없어요',
      },
      {
        combo: [5, 6],
        desc: '슬프고 어의없어요',
      },
    ],
  },
];
