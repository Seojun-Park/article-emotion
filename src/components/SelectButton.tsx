import { Box, BoxProps, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface SelectButtonProps extends BoxProps {
  source: string;
  onSelect: () => void;
  title?: string;
}

export const SelectButton: FC<SelectButtonProps> = ({
  source,
  onSelect,
  title,
  ...rest
}) => {
  return !title ? (
    <Box
      component={'img'}
      sx={{
        cursor: 'pointer',
        padding: '0.5rem',
        borderRadius: '1rem',
        '&:hover': {
          backgroundColor: '#ececec',
          transition: 'linear 0.1s',
        },
      }}
      onClick={onSelect}
      src={source}
      width={50}
      height={50}
      {...rest}
    />
  ) : (
    <Stack
      alignItems={'center'}
      sx={{
        '&:hover .MuiTypography-root': {
          fontWeight: 800,
        },
      }}>
      <Box
        component={'img'}
        sx={{
          cursor: 'pointer',
          padding: '0.5rem',
          borderRadius: '1rem',
          '&:hover': {
            backgroundColor: '#ececec',
            transition: 'linear 0.1s',
          },
        }}
        onClick={onSelect}
        src={source}
        width={50}
        height={50}
        {...rest}
      />
      <Typography variant='body2'>{title}</Typography>
    </Stack>
  );
};

export default null;
