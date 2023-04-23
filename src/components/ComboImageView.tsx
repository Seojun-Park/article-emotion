import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Image } from './Image';
import { CombinationType, combination } from '../combination';
import { basePath, iconData } from '../data';

interface ComboImageViewProps {
  topic: number;
}

export const ComboImageView: FC<ComboImageViewProps> = ({ topic }) => {
  const [combo, setCombo] = useState<CombinationType>();

  useEffect(() => {
    const icon = iconData[topic].icons;
    const compiledCombination: CombinationType['combination'] = combination[
      topic
    ].combination.map((val) => {
      const numberCombo = val.combo;
      val.icons = [];
      return {
        ...val,
        icons: numberCombo?.map((v) => {
          return `${basePath}/${
            icon.find((iconValue) => iconValue.id === v)?.desc
          }.png`;
        }) || [''],
      };
    });
    setCombo({
      topic,
      combination: compiledCombination.sort(
        (a, b) => (b.basePick || 0) - (a.basePick || 0)
      ),
    });
  }, [topic]);

  return (
    <Stack
      direction={'row'}
      maxWidth={'xl'}
      sx={{
        display: 'flex',
        overflow: 'auto',
        mr: '1rem',
        ml: '1rem',
        padding: '1rem',
      }}
      justifyContent={'center'}
      spacing={2}>
      <Stack
        direction={'row'}
        spacing={1}
        sx={{
          width: '100%',
        }}>
        {combo?.combination?.map((v, i) => {
          return (
            <Paper
              sx={{
                padding: '0.5rem',
              }}
              elevation={4}
              key={i}>
              <Stack alignItems={'center'}>
                <Stack direction={'row'}>
                  {v.icons?.map((img, i) => {
                    return (
                      <Image
                        path={img}
                        key={i}
                      />
                    );
                  })}
                </Stack>
                <Typography
                  variant='caption'
                  sx={{
                    whiteSpace: 'nowrap',
                  }}>
                  {v.desc}
                </Typography>

                <Typography variant='caption'>
                  {v.basePick ? v.basePick : 0}
                </Typography>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default null;
