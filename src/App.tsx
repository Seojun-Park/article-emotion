import { FC, useState } from 'react';
import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  Stack,
} from '@mui/material';
import {
  ComboButton,
  ComboImageView,
  Navigator,
  SelectedView,
} from './components';
import { content } from './assets/htmls/content';
import { iconData } from './data';
import _ from 'lodash';

const App: FC = () => {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  const [selected, setSelected] = useState<Array<number>>([]);

  // TODO: duplicate selection removal
  const handleSelect: FormControlLabelProps['onChange'] = (e) => {
    // @ts-expect-error not defined target value
    const value = e.target?.value;
    const withSelectied: number[] = selected.concat(parseInt(value, 10));
    setSelected(withSelectied);
    if (withSelectied.length === 3) {
      withSelectied.shift();
      setSelected(withSelectied);
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
            dangerouslySetInnerHTML={{ __html: content[selectedNav].content }}
          />
          <Divider>: : 현재 기사의 공감 현황 : :</Divider>
          <Container
            sx={{
              backgroundColor: '#ececec',
              mt: '1rem',
              mb: '1rem',
            }}>
            <Container
              maxWidth='md'
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ComboImageView topic={selectedNav} />
              <Stack direction={'row'}>
                <ComboButton
                  iconPath='src/assets/htmls/images/move01.png'
                  desc='추천'
                  number={5}
                />
                <ComboButton
                  iconPath='src/assets/htmls/images/move02.png'
                  desc='후속기사 원해요'
                  number={10}
                />
              </Stack>
            </Container>
          </Container>
          <FormControl
            component={'fieldset'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem 0 2rem 0',
            }}>
            <FormGroup row>
              {iconData[selectedNav].icons.map((selection) => {
                return (
                  <FormControlLabel
                    key={selection.id}
                    value={selection.id}
                    checked={selected.includes(selection.id)}
                    control={<Checkbox />}
                    label={<img src={`src/assets/htmls/images/${selection.desc}.png`} />}
                    onChange={handleSelect}
                    labelPlacement='top'
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </Stack>
        <Divider>이 기사에 대해 어떻게 생각하시나요?</Divider>
        <SelectedView
          selected={selected}
          topic={selectedNav}
        />
      </Container>
    </Box>
  );
};

export default App;
