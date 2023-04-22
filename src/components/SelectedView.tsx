import { FC, useEffect, useState } from 'react';
import { Container, Paper, Stack } from '@mui/material';
import _ from 'lodash';
import { combination } from '../combination';
import { iconData } from '../data';

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

  useEffect(() => {
    const currentTopic = combination.find((v) => v.topic === topic);
    const foundCombo = currentTopic?.combination.find((v) => {
      return JSON.stringify(v.combo) === JSON.stringify(selected);
    });

    setCombo(foundCombo);
  }, [selected, topic]);

  return (
    <Container
      maxWidth='md'
      sx={{
        marginBottom: '2rem',
      }}>
      <Stack alignItems={'center'}>
        <Stack direction={'row'}>
          {selected && combo ? (
            <Paper
              sx={{
                padding: '1rem',
                borderRadius: '2rem',
              }}
              elevation={4}>
              <Stack
                direction={'row'}
                spacing={2}>
                <img
                  src={`src/assets/htmls/images/${
                    iconData[topic].icons[selected[0]]?.desc
                  }.png`}
                  alt='icon'
                />
                <img
                  src={`src/assets/htmls/images/${
                    iconData[topic].icons[selected[1]]?.desc
                  }.png`}
                  alt='icon'
                />
              </Stack>
            </Paper>
          ) : (
            <Paper>없음</Paper>
          )}
        </Stack>
        {combo?.desc}
      </Stack>
    </Container>
  );
};

export default null;
