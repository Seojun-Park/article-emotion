import { FC, useState } from 'react';
import { Box, Container, Divider, Paper, Stack } from '@mui/material';
import {
  ComboButton,
  ComboImageView,
  Navigator,
  SelectButton,
  SelectedView,
} from './components';
import { iconData } from './data';
import _ from 'lodash';
import { useOptionContext } from './contexts';
import { htmlContent } from './htmlContent';
const { BASE_URL } = import.meta.env;

const App: FC = () => {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  const [selected, setSelected] = useState<Array<number>>([]);
  const {
    recommend,
    nextArticle,
    setSelected: setContextSelectd,
  } = useOptionContext();

  const handleSelect = (selection: { id: number; desc: string }) => {
    const value = selection.id;
    if (
      selected.length === 2 &&
      selected[0] === value &&
      selected[1] === value
    ) {
      const newVal = selected.slice(0, 1);
      setSelected(newVal);
      setContextSelectd(newVal);
      return;
    }
    const withSelected: number[] = selected.concat(value);
    setSelected(withSelected);
    setContextSelectd(withSelected);
    if (withSelected.length === 3) {
      withSelected.shift();
      setSelected(withSelected);
      setContextSelectd(withSelected)
      return;
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
            dangerouslySetInnerHTML={{
              __html: htmlContent[selectedNav].content,
            }}
          />
          <Divider>: : 현재 기사의 공감 현황 : :</Divider>
          <Container
            sx={{
              backgroundColor: '#ececec',
              mt: '1rem',
              mb: '1rem',
            }}>
            <Container
              maxWidth='xl'
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                alignItems: 'center',
              }}
              >
              <ComboImageView topic={selectedNav} />
              <Stack direction={'row'} sx={{
                ml: '1.5rem'
              }}>
                <ComboButton
                  iconPath={`${BASE_URL}/assets/htmls/images/move01.png`}
                  desc='추천'
                  number={recommend}
                />
                <ComboButton
                  iconPath={`${BASE_URL}/assets/htmls/images/move02.png`}
                  desc='후속기사 원해요'
                  number={nextArticle}
                />
              </Stack>
            </Container>
          </Container>
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
                {iconData[selectedNav].icons.map((selection, idx) => {
                  return (
                    <SelectButton
                      key={idx}
                      source={`${BASE_URL}/assets/htmls/images/${selection.desc}.png`}
                      desc={selection.desc}
                      onSelect={() => {
                        handleSelect(selection);
                      }}
                    />
                  );
                })}
              </Stack>
            </Paper>
          </Container>
        </Stack>
        <SelectedView
          selected={selected}
          topic={selectedNav}
        />
      </Container>
    </Box>
  );
};

export default App;
