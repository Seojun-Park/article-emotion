import { Paper, Stack, Typography } from '@mui/material';
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
    const compiledCombination: CombinationType['combination'] = combination[topic].combination.map((val) => {
      const numberCombo = val.combo;
      val.icons = [];
      return {
        ...val,
        icons: numberCombo?.map((v) => {
          return `${basePath}/${icon.find((iconValue) => iconValue.id === v)?.desc}.png`
        }) || ['']
      }
    })
    setCombo({
      topic,
      combination: compiledCombination
    })
  }, [topic]);

  return (
    <Stack
      direction={'row'}
      sx={{
        overflow: 'auto',
        mr: '1rem',
        ml: '1rem',
        maxWidth: '600px',
        padding: '1rem',
        paddingLeft: '10rem',
      }}
      justifyContent={'center'}
      spacing={2}>
      {combo?.combination?.map((v, i) => {
        const baseNum = 15;
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
              <Typography variant='caption'>{baseNum - i}</Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default null;
