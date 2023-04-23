import { FC, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Navigator, SelectButton } from './components';
import { iconData } from './data';
import _ from 'lodash';
import { htmlContent } from './htmlContent';
const { BASE_URL } = import.meta.env;

const App: FC = () => {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  const [flag, setFlag] = useState<{
    pickedId?: number;
    picked: boolean;
  }>({
    picked: false,
  });
  const [data, setData] = useState<
    {
      id: number;
      desc: string;
      picked: number;
    }[]
  >();

  useEffect(() => {
    setData(
      iconData[selectedNav].icons.map((v) => {
        return {
          ...v,
          picked: Math.floor(Math.random() * 20),
        };
      })
    );
  }, [selectedNav]);

  const handleSelect = (selection: {
    id: number;
    desc: string;
    picked: number;
  }) => {
    if (flag.picked && flag.pickedId !== selection.id) {
      const compiledData = data?.map((v) => {
        if (v.id === flag.pickedId) {
          return {
            ...v,
            picked: v.picked - 1,
          };
        }
        if (v.id === selection.id) {
          return {
            ...v,
            picked: v.picked + 1,
          };
        }
        return v;
      });
      setData(compiledData);
      setFlag({
        picked: true,
        pickedId: selection.id,
      });
      return;
    }
    if (flag.picked && flag.pickedId === selection.id) {
      const compiledData = data?.map((v) => {
        if (v.id === flag.pickedId) {
          return {
            ...v,
            picked: v.picked - 1,
          };
        }
        if (v.id === selection.id) {
          return {
            ...v,
            picked: v.picked + 1,
          };
        }
        return v;
      });
      setData(compiledData);
      setFlag({
        picked: false,
        pickedId: undefined,
      });
      return;
    }

    if (!flag.picked) {
      const compiledData = data?.map((v) => {
        if (v.id === selection.id) {
          return {
            ...v,
            picked: v.picked + 1,
          };
        }
        return v;
      });
      setData(compiledData);
      setFlag({
        picked: true,
        pickedId: selection.id,
      });
    } else {
      console.log('already picked');
    }
  };

  return (
    <Box>
      <Navigator
        selectedNav={selectedNav}
        setSelectedNav={setSelectedNav}
      />
      <Container maxWidth='xl'>
        <Stack>
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent[selectedNav].content }}
          />
          <Divider>이 기사에 대해 어떻게 생각하시나요?</Divider>
          <Container
            maxWidth={'lg'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: '1rem',
              pb: '1rem',
            }}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: '10rem',
                pt: '0.5rem',
                pb: '0.5rem',
                pl: '2rem',
                pr: '2rem',
                margin: '1rem',
              }}>
              <Stack
                direction={'row'}
                spacing={5}>
                {data?.map((selection, idx) => {
                  return (
                    <Stack
                      key={idx}
                      alignItems={'center'}>
                      <SelectButton
                        source={`${BASE_URL}/assets/htmls/images/${selection.desc}.png`}
                        onSelect={() => {
                          console.log(selection);
                          handleSelect(selection);
                        }}
                      />
                      <Typography variant='caption'>
                        {selection.picked}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Paper>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
