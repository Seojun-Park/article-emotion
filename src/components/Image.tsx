import { Box } from '@mui/material';
import { FC } from 'react';

interface ImageProps {
  path: string;
}

export const Image: FC<ImageProps> = ({ path }) => {
  return (
    <Box
      component={'img'}
      height={50}
      width={50}
      src={path}
      alt='icon'
    />
  );
};

export default null;
