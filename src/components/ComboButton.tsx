import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface ComboButtonProps {
  iconPath: string;
  desc: string;
  number: number;
}

export const ComboButton: FC<ComboButtonProps> = ({
  iconPath,
  desc,
  number,
}) => {
  return (
    <Stack
      alignItems={'center'}
      marginRight={1}>
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '80px',
          width: '80px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem',
          borderRadius:'1rem',
        }}>
        <Box
          component={'img'}
          src={iconPath}
          width={50}
          height={50}
          alt='loupe'
        />
        <Typography variant='caption'>{desc}</Typography>
        <Typography variant='caption'>{number}</Typography>
      </Paper>
    </Stack>
  );
};

export default null;
