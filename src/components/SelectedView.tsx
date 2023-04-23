import { FC, useEffect, useState } from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import _ from 'lodash';
import { combination } from '../combination';
import { iconData } from '../data';
import { SelectButton } from './SelectButton';
import { useOptionContext } from '../contexts';

interface SelectedViewProps {
  topic: number;
  selected: number[];
}

export const SelectedView: FC<SelectedViewProps> = ({ selected, topic }) => {
  const [combo, setCombo] = useState<
    | {
        combo: number[];
        desc: string;
      }
    | undefined
  >();
  const { recommend, nextArticle, setRecommend, setNextArticle } =
    useOptionContext();
  const [flag, setFlag] = useState<{
    recommend: boolean;
    next: boolean;
  }>({
    recommend: false,
    next: false,
  });

  useEffect(() => {
    const currentTopic = combination.find((v) => v.topic === topic);
    const foundCombo = currentTopic?.combination.find((v) => {
      return JSON.stringify(v.combo) === JSON.stringify(selected);
    });

    setCombo(foundCombo);
  }, [selected, topic]);

  const handleOptionSelect = (option: 'recommend' | 'next') => {
    switch (option) {
      case 'recommend':
        if (flag.recommend) {
          setRecommend(recommend - 1);
          setFlag({
            recommend: false,
            next: flag.next,
          });
        } else {
          setRecommend(recommend + 1);
          setFlag({
            recommend: true,
            next: flag.next,
          });
        }
        break;
      case 'next':
        if (flag.next) {
          setNextArticle(nextArticle - 1);
          setFlag({
            recommend: flag.recommend,
            next: false,
          });
        } else {
          setNextArticle(nextArticle + 1);
          setFlag({
            recommend: flag.recommend,
            next: true,
          });
        }
        break;
    }
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem',
      }}>
      <Stack alignItems={'center'}>
        <Stack direction={'row'}>
          {selected.length > 0 && !combo ? (
            <Paper
              sx={{
                padding: '1rem',
                borderRadius: '2rem',
              }}
              elevation={4}>
              <Box
                component={'img'}
                src={`assets/htmls/images/${
                  iconData[topic].icons[selected[0]]?.desc
                }.png`}
                alt='icon'
              />
            </Paper>
          ) : combo ? (
            <Paper
              sx={{
                padding: '1rem',
                borderRadius: '2rem',
              }}
              elevation={4}>
              <Stack
                direction={'row'}
                spacing={2}>
                <Box
                  component={'img'}
                  src={`assets/htmls/images/${
                    iconData[topic].icons[selected[0]]?.desc
                  }.png`}
                  alt='icon'
                />
                <Box
                  component={'img'}
                  src={`assets/htmls/images/${
                    iconData[topic].icons[selected[1]]?.desc
                  }.png`}
                  alt='icon'
                />
              </Stack>
            </Paper>
          ) : (
            <Paper
              sx={{
                padding: '1rem',
              }}>
              없음
            </Paper>
          )}
        </Stack>
        {combo?.desc}
      </Stack>
      <Stack
        direction={'row'}
        spacing={1}
        ml={5}>
        <SelectButton
          source={`assets/htmls/images/${
            !flag.recommend ? 'move01' : 'move01_on'
          }.png`}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onSelect={() => {
            handleOptionSelect('recommend');
          }}
          title='추천'
        />
        <SelectButton
          source={`assets/htmls/images/${
            !flag.next ? 'move02' : 'move02_on'
          }.png`}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onSelect={() => {
            handleOptionSelect('next');
          }}
          title='후속기사'
        />
      </Stack>
    </Container>
  );
};

export default null;
