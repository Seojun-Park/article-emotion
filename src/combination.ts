export type CombinationType = {
  topic: number;
  combination: {
    combo: number[];
    desc: string;
    icons?: string[];
  }[];
};

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
  {
    topic: 2,
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
        desc: '정말 웃겨요',
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
        combo: [7, 7],
        desc: '정말 무서워요',
      },
      {
        combo: [1, 0],
        desc: '고맙고 좋아요',
      },
      {
        combo: [2, 0],
        desc: '괜찮고 좋아요',
      },
      {
        combo: [3, 0],
        desc: '웃기고 좋아요',
      },
      {
        combo: [0, 4],
        desc: '좋지만 화나요',
      },
      {
        combo: [4, 0],
        desc: '화나지만 좋아요',
      },
      {
        combo: [0, 5],
        desc: '좋지만 슬퍼요',
      },
      {
        combo: [5, 0],
        desc: '슬프지만 좋아요',
      },
      {
        combo: [0, 6],
        desc: '좋지만 어의없어요',
      },
      {
        combo: [6, 0],
        desc: '어의없지만 좋아요',
      },
      {
        combo: [0, 7],
        desc: '좋지만 무서워요',
      },
      {
        combo: [7, 0],
        desc: '무섭지만 좋아요',
      },
      {
        combo: [2, 1],
        desc: '괜찮고 고마워요',
      },
      {
        combo: [1, 3],
        desc: '고맙고 웃겨요',
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
        combo: [1, 7],
        desc: '고맙지만 무서워요',
      },
      {
        combo: [7, 1],
        desc: '무섭지만 고마워요',
      },
      {
        combo: [2, 3],
        desc: '괜찮고 웃겨요',
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
        desc: '웃기지만 화나요',
      },
      {
        combo: [4, 3],
        desc: '화나지만 웃겨요',
      },
      {
        combo: [3, 5],
        desc: '웃기지만 슬퍼요',
      },
      {
        combo: [5, 3],
        desc: '슬프지만 웃겨요',
      },
      {
        combo: [3, 6],
        desc: '웃기지만 어의없어요',
      },
      {
        combo: [6, 3],
        desc: '어의없지만 웃겨요',
      },
      {
        combo: [3, 7],
        desc: '웃기지만 무서워요',
      },
      {
        combo: [7, 3],
        desc: '무섭지만 웃겨요',
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
        combo: [4, 7],
        desc: '화나고 무서워요',
      },
      {
        combo: [5, 6],
        desc: '슬프고 어의없어요',
      },
      {
        combo: [5, 7],
        desc: '슬프고 무서워요',
      },
      {
        combo: [6, 7],
        desc: '어의없고 무서워요',
      },
    ],
  },
  {
    topic: 3,
    combination: [
      {
        combo: [0, 0],
        desc: '정말 좋아요',
      },
      {
        combo: [1, 1],
        desc: '정말 괜찮아요',
      },
      {
        combo: [2, 2],
        desc: '정말 웃겨요',
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
        combo: [0, 1],
        desc: '멋지고 괜찮아요',
      },
      {
        combo: [0, 2],
        desc: '멋지고 웃겨요',
      },
      {
        combo: [0, 3],
        desc: '멋지고 부러워요',
      },
      {
        combo: [0, 4],
        desc: '멋지지만 화나요',
      },
      {
        combo: [4, 0],
        desc: '화나지만 멋져요',
      },
      {
        combo: [0, 5],
        desc: '멋지지만 슬퍼요',
      },
      {
        combo: [5, 0],
        desc: '슬프지만 멋져요',
      },
      {
        combo: [0, 6],
        desc: '멋지지만 어의없어요',
      },
      {
        combo: [6, 0],
        desc: '어의없지만 멋져요',
      },
      {
        combo: [1, 2],
        desc: '괜찮고 웃겨요',
      },
      {
        combo: [1, 3],
        desc: '괜찮고 부러워요',
      },
      {
        combo: [1, 4],
        desc: '괜찮지만 화나요',
      },
      {
        combo: [4, 1],
        desc: '화나지만 괜찮아요',
      },
      {
        combo: [1, 5],
        desc: '괜찮지만 슬퍼요',
      },
      {
        combo: [5, 1],
        desc: '슬프지만 괜찮아요',
      },
      {
        combo: [1, 6],
        desc: '괜찮지만 어의없어요',
      },
      {
        combo: [6, 1],
        desc: '어의없지만 괜찮아요',
      },
      {
        combo: [2, 3],
        desc: '웃기고 부러워요',
      },
      {
        combo: [2, 4],
        desc: '웃기지만 화나요',
      },
      {
        combo: [4, 2],
        desc: '화나지만 웃겨요',
      },
      {
        combo: [2, 5],
        desc: '웃기지만 슬퍼요',
      },
      {
        combo: [5, 2],
        desc: '슬프지만 웃겨요',
      },
      {
        combo: [2, 6],
        desc: '웃기지만 어의없어요',
      },
      {
        combo: [6, 2],
        desc: '어의없지만 웃겨요',
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
        desc: '화나지만 부러워요',
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
        desc: '화나지만 슬퍼요',
      },
      {
        combo: [5, 4],
        desc: '슬프지만 화나요',
      },
      {
        combo: [4, 5],
        desc: '화나고 어의없어요',
      },
      {
        combo: [5, 6],
        desc: '슬프고 어의없어요',
      },
    ],
  },
  {
    topic: 4,
    combination: [
      {
        combo: [0, 0],
        desc: '정말 고마워요',
      },
      {
        combo: [1, 1],
        desc: '정말 괜찮아요',
      },
      {
        combo: [2, 2],
        desc: '정말 재밌어요',
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
        combo: [0, 1],
        desc: '고맙고 괜찮아요',
      },
      {
        combo: [0, 2],
        desc: '고맙고 재밌어요',
      },
      {
        combo: [0, 3],
        desc: '고맙고 부러워요',
      },
      {
        combo: [0, 4],
        desc: '고맙지만 화나요',
      },
      {
        combo: [4, 0],
        desc: '화나지만 고마워요',
      },
      {
        combo: [0, 5],
        desc: '고맙지만 슬퍼요',
      },
      {
        combo: [5, 0],
        desc: '슬프지만 고마워요',
      },
      {
        combo: [0, 6],
        desc: '고맙지만 어의없어요',
      },
      {
        combo: [6, 0],
        desc: '어의없지만 고마워요',
      },
      {
        combo: [1, 2],
        desc: '괜찮고 재밌어요',
      },
      {
        combo: [1, 3],
        desc: '괜찮고 부러워요',
      },
      {
        combo: [1, 4],
        desc: '괜찮지만 화나요',
      },
      {
        combo: [4, 1],
        desc: '화나지만 괜찮아요',
      },
      {
        combo: [1, 5],
        desc: '괜찮지만 슬퍼요',
      },
      {
        combo: [5, 1],
        desc: '슬프지만 괜찮아요',
      },
      {
        combo: [1, 6],
        desc: '괜찮지만 어의없어요',
      },
      {
        combo: [6, 1],
        desc: '어의없지만 괜찮아요',
      },
      {
        combo: [2, 3],
        desc: '재밌고 부러워요',
      },
      {
        combo: [2, 4],
        desc: '재밌지만 화나요',
      },
      {
        combo: [4, 2],
        desc: '화나지만 재미있어요',
      },
      {
        combo: [2, 5],
        desc: '재밌지만 슬퍼요',
      },
      {
        combo: [5, 2],
        desc: '슬프지만 재밌어요',
      },
      {
        combo: [2, 6],
        desc: '재밌지만 어의없어요',
      },
      {
        combo: [6, 2],
        desc: '어의없지만 재밌어요',
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
  {
    topic: 5,
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
        desc: '정말 괜찮아요',
      },
      {
        combo: [3, 3],
        desc: '정말 웃겨요',
      },
      {
        combo: [4, 4],
        desc: '정말 부러워요',
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
        combo: [7, 7],
        desc: '정말 무서워요',
      },
      {
        combo: [8, 8],
        desc: '정말 부끄러워요',
      },
      {
        combo: [1, 0],
        desc: '멋지고 고마워요',
      },
      {
        combo: [2, 0],
        desc: '괜찮고 고마워요',
      },
      {
        combo: [3, 0],
        desc: '웃기고 고마워요',
      },
      {
        combo: [4, 0],
        desc: '부럽고 고마워요',
      },
      {
        combo: [0, 5],
        desc: '고맙지만 슬퍼요',
      },
      {
        combo: [5, 0],
        desc: '슬프지만 고마워요',
      },
      {
        combo: [0, 6],
        desc: '고맙지만 어의없어요',
      },
      {
        combo: [6, 0],
        desc: '어의없지만 고마워요',
      },
      {
        combo: [0, 7],
        desc: '고맙지만 무서워요',
      },
      {
        combo: [7, 0],
        desc: '무섭지만 고마워요',
      },
      {
        combo: [0, 8],
        desc: '고맙지만 부끄러워요',
      },
      {
        combo: [8, 0],
        desc: '부끄럽지만 고마워요',
      },
      {
        combo: [1, 2],
        desc: '멋지고 괜찮아요',
      },
      {
        combo: [1, 3],
        desc: '멋지고 웃겨요',
      },
      {
        combo: [1, 4],
        desc: '멋지고 부러워요',
      },
      {
        combo: [1, 5],
        desc: '멋지지만 슬퍼요',
      },
      {
        combo: [5, 1],
        desc: '슬프지만 멋져요',
      },
      {
        combo: [1, 6],
        desc: '멋지지만 어의없어요',
      },
      {
        combo: [6, 1],
        desc: '어의없지만 멋져요',
      },
      {
        combo: [1, 7],
        desc: '멋지지만 무서워요',
      },
      {
        combo: [7, 1],
        desc: '무섭지만 멋져요',
      },
      {
        combo: [1, 8],
        desc: '멋지지만 부끄러워요',
      },
      {
        combo: [8, 1],
        desc: '부끄럽지만 멋져요',
      },
      {
        combo: [2, 3],
        desc: '괜찮지만 웃겨요',
      },
      {
        combo: [3, 2],
        desc: '웃기지만 괜찮아요',
      },
      {
        combo: [2, 4],
        desc: '괜찮고 부러워요',
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
        desc: '괜찮지만 어이없어요',
      },
      {
        combo: [6, 2],
        desc: '어의없지만 괜찮아요',
      },
      {
        combo: [2, 7],
        desc: '괜찮지만 무서워요',
      },
      {
        combo: [7, 2],
        desc: '무섭지만 괜찮아요',
      },
      {
        combo: [2, 8],
        desc: '괜찮지만 부끄러워요',
      },
      {
        combo: [6, 2],
        desc: '부끄럽지만 괜찮아요',
      },
      {
        combo: [3, 4],
        desc: '웃기고 부러워요',
      },
      {
        combo: [3, 5],
        desc: '웃기지만 슬퍼요',
      },
      {
        combo: [5, 3],
        desc: '슬프지만 웃겨요',
      },
      {
        combo: [3, 6],
        desc: '웃기지만 어의없어요',
      },
      {
        combo: [6, 3],
        desc: '어의없지만 슬퍼요',
      },
      {
        combo: [3, 7],
        desc: '웃기지만 무서워요',
      },
      {
        combo: [7, 3],
        desc: '무섭지만 웃겨요',
      },
      {
        combo: [3, 8],
        desc: '웃기지만 부끄러워요',
      },
      {
        combo: [8, 3],
        desc: '부끄럽지만 웃겨요',
      },
      {
        combo: [4, 5],
        desc: '부럽지만 슬퍼요',
      },
      {
        combo: [5, 4],
        desc: '슬프지만 부러워요',
      },
      {
        combo: [4, 6],
        desc: '부럽지만 어의없어요',
      },
      {
        combo: [6, 4],
        desc: '어의없지만 부러워요',
      },
      {
        combo: [4, 7],
        desc: '부럽지만 무서워요',
      },
      {
        combo: [7, 4],
        desc: '무섭지만 부러워요',
      },
      {
        combo: [4, 8],
        desc: '부럽지만 부끄러워요',
      },
      {
        combo: [8, 4],
        desc: '부끄럽지만 부러워요',
      },
      {
        combo: [5, 6],
        desc: '슬프고 어의없어요',
      },
      {
        combo: [5, 7],
        desc: '슬프고 무서워요',
      },
      {
        combo: [5, 8],
        desc: '슬프고 부끄러워요',
      },
      {
        combo: [6, 7],
        desc: '어의없고 무서워요',
      },
      {
        combo: [6, 8],
        desc: '어의없고 부끄러워요',
      },
      {
        combo: [7, 8],
        desc: '무섭고 부끄러워요',
      },
    ],
  },
  {
    topic: 6,
    combination: [
      {
        combo: [0, 0],
        desc: '정말 좋아요',
      },
      {
        combo: [1, 1],
        desc: '정말 멋져요',
      },
      {
        combo: [2, 2],
        desc: '정말 괜찮아요',
      },
      {
        combo: [3, 3],
        desc: '정말 재밌어요',
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
        combo: [7, 7],
        desc: '정말 안타까워요',
      },
      {
        combo: [1, 0],
        desc: '멋지고 좋아요',
      },
      {
        combo: [2, 0],
        desc: '괜찮고 좋아요',
      },
      {
        combo: [3, 0],
        desc: '재밌고 좋아요',
      },
      {
        combo: [0, 4],
        desc: '좋지만 화나요',
      },
      {
        combo: [4, 0],
        desc: '화나지만 좋아요',
      },
      {
        combo: [0, 5],
        desc: '좋지만 슬퍼요',
      },
      {
        combo: [5, 0],
        desc: '슬프지만 좋아요',
      },
      {
        combo: [0, 6],
        desc: '좋지만 어의없어요',
      },
      {
        combo: [6, 0],
        desc: '어의없지만 좋아요',
      },
      {
        combo: [0, 7],
        desc: '좋지만 안타까워요',
      },
      {
        combo: [7, 0],
        desc: '안타깝지만 좋아요',
      },
      {
        combo: [1, 2],
        desc: '멋지고 괜찮아요',
      },
      {
        combo: [1, 3],
        desc: '멋지고 재미있어요',
      },
      {
        combo: [1, 4],
        desc: '멋지지만 화나요',
      },
      {
        combo: [4, 1],
        desc: '화나지만 멋져요',
      },
      {
        combo: [1, 5],
        desc: '멋지지만 슬퍼요',
      },
      {
        combo: [5, 1],
        desc: '슬프지만 멋져요F',
      },
      {
        combo: [1, 6],
        desc: '멋지지만 어의없어요',
      },
      {
        combo: [6, 1],
        desc: '어의없지만 멋져요',
      },
      {
        combo: [1, 7],
        desc: '멋지지만 안타까워요',
      },
      {
        combo: [7, 1],
        desc: '안타깝지만 멋져요',
      },
      {
        combo: [3, 2],
        desc: '재미있고 괜찮아요',
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
        combo: [2, 7],
        desc: '괜찮지만 안타까워요',
      },
      {
        combo: [7, 2],
        desc: '안타깝지만 괜찮아요',
      },
      {
        combo: [3, 4],
        desc: '재밌지만 화나요',
      },
      {
        combo: [4, 3],
        desc: '화나지만 재밌어요',
      },
      {
        combo: [3, 5],
        desc: '재밌지만 슬퍼요',
      },
      {
        combo: [5, 3],
        desc: '슬프지만 재밌어요',
      },
      {
        combo: [3, 6],
        desc: '재밌지만 어의없어요',
      },
      {
        combo: [6, 3],
        desc: '어의없지만 재밌어요',
      },
      {
        combo: [3, 7],
        desc: '재밌지만 안타까워요',
      },
      {
        combo: [7, 3],
        desc: '안타깝지만 재밌어요',
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
        combo: [4, 7],
        desc: '화나고 안타까워요',
      },
      {
        combo: [5, 6],
        desc: '슬프고 어의없어요',
      },
      {
        combo: [5, 7],
        desc: '슬프고 안타까워요',
      },
      {
        combo: [6, 7],
        desc: '어의없고 안타까워요',
      },
    ],
  },
  {
    topic: 7,
    combination: [
      {
        combo: [0, 0],
        desc: '정말 좋아요',
      },
      {
        combo: [1, 1],
        desc: '정말 멋져요',
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
        desc: '정말 슬퍼요',
      },
      {
        combo: [5, 5],
        desc: '정말 어의없어요',
      },
      {
        combo: [6, 6],
        desc: '정말 무서워요',
      },
      {
        combo: [7, 7],
        desc: '정말 아쉬워요',
      },
      {
        combo: [1, 0],
        desc: ' 좋아요',
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
        desc: '슬프고 좋아요',
      },
      {
        combo: [0, 5],
        desc: '좋지만 어의없어요',
      },
      {
        combo: [5, 0],
        desc: '어의없지만 좋아요',
      },
      {
        combo: [0, 6],
        desc: '좋지만 무서워요',
      },
      {
        combo: [6, 0],
        desc: '무섭지만 좋아요',
      },
      {
        combo: [0, 7],
        desc: '좋지만 아쉬워요',
      },
      {
        combo: [7, 0],
        desc: '아쉽지만 좋아요',
      },
      {
        combo: [1, 2],
        desc: '멋지고 괜찮아요',
      },
      {
        combo: [3, 1],
        desc: '부럽고 멋져요',
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
        desc: '멋지지만 어의없어요',
      },
      {
        combo: [5, 1],
        desc: '어의없지만 멋져요',
      },
      {
        combo: [1, 6],
        desc: '멋지지만 무서워요',
      },
      {
        combo: [6, 1],
        desc: '무섭지만 멋져요',
      },
      {
        combo: [1, 7],
        desc: '멋지지만 아쉬워요',
      },
      {
        combo: [7, 1],
        desc: '아쉽지만 멋져요',
      },
      {
        combo: [2, 3],
        desc: '괜찮고 부러워요',
      },
      {
        combo: [2, 4],
        desc: '괜찮지만 슬퍼요',
      },
      {
        combo: [4, 2],
        desc: '슬프지만 괜찮아요',
      },
      {
        combo: [2, 5],
        desc: '괜찮지만 어의없어요',
      },
      {
        combo: [5, 2],
        desc: '어의없지만 괜찮아요',
      },
      {
        combo: [2, 6],
        desc: '괜찮지만 무서워요',
      },
      {
        combo: [6, 2],
        desc: '무섭지만 괜찮아요',
      },
      {
        combo: [2, 7],
        desc: '괜찮지만 아쉬워요',
      },
      {
        combo: [7, 2],
        desc: '아쉽지만 괜찮아요',
      },
      {
        combo: [3, 4],
        desc: '부럽지만 슬퍼요',
      },
      {
        combo: [4, 3],
        desc: '슬프지만 부러워요',
      },
      {
        combo: [3, 5],
        desc: '부럽지만 어의없어요',
      },
      {
        combo: [5, 3],
        desc: '어의없지만 부러워요',
      },
      {
        combo: [3, 6],
        desc: '부럽지만 무서워요',
      },
      {
        combo: [6, 3],
        desc: '무섭지만 부러워요',
      },
      {
        combo: [3, 7],
        desc: '부럽지만 아쉬워요',
      },
      {
        combo: [7, 3],
        desc: '아쉽지만 부러워요',
      },
      {
        combo: [4, 5],
        desc: '슬프고 어의없어요',
      },
      {
        combo: [4, 6],
        desc: '슬프고 무서워요',
      },
      {
        combo: [4, 7],
        desc: '슬프고 아쉬워요',
      },
      {
        combo: [5, 6],
        desc: '어의없고 무서워요',
      },
      {
        combo: [5, 7],
        desc: '어의없고 아쉬워요',
      },
      {
        combo: [6, 7],
        desc: '무섭고 아쉬워요',
      },
      {
        combo: [7, 6],
        desc: '아쉽고 무서워요',
      },
    ],
  },
];
