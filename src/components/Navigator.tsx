import { Dispatch, FC, SetStateAction } from 'react';
import { Box, Button, Stack, Tab, Tabs, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface NavigatorProps {
  selectedNav: number;
  setSelectedNav: Dispatch<SetStateAction<number>>;
}

const navData = [
  {
    id: 0,
    label: '정치',
  },
  {
    id: 1,
    label: '경제',
  },
  {
    id: 2,
    label: '사회',
  },
  {
    id: 3,
    label: '생활/문화',
  },
  {
    id: 4,
    label: 'IT/과학',
  },
  {
    id: 5,
    label: '세계',
  },
  {
    id: 6,
    label: '연예',
  },
  {
    id: 7,
    label: '스포츠',
  },
];

const Row = styled('div')({
  padding: '1rem',
});

export const Navigator: FC<NavigatorProps> = ({
  selectedNav,
  setSelectedNav,
}) => {
  const { pathname } = useLocation();

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Row sx={{
        pb: 0,
      }}>
        <Button
          component={Link}
          to={pathname == '/sub' ? '/' : '/sub'}>
          Link to {pathname == '/sub' ? 'Main' : 'Sub'}
        </Button>
      </Row>
      <Row>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}>
          <Tabs value={selectedNav}>
            {navData.map((nav) => {
              return (
                <Tab
                  id={`simple-tab-${nav.id}`}
                  aria-controls={`simple-tabpanel-${nav.id}`}
                  key={nav.id}
                  label={nav.label}
                  onClick={() => setSelectedNav(nav.id)}
                />
              );
            })}
          </Tabs>
        </Box>
      </Row>
    </Stack>
  );
};

export default null;
