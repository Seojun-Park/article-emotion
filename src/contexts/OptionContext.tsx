import { useMediaQuery } from '@mui/material';
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface OptionContextProps {
  media: boolean;
  isSmall: boolean;
  recommend: number;
  setRecommend: Dispatch<SetStateAction<number>>;
  nextArticle: number;
  setNextArticle: Dispatch<SetStateAction<number>>;
  selected: number[] | undefined;
  setSelected: Dispatch<SetStateAction<number[] | undefined>>
}

interface OptionContextProviderProps {
  children: ReactNode;
}

export const OptionContext = createContext<OptionContextProps | undefined>(
  undefined
);

export const OptionContextProvider: FC<OptionContextProviderProps> = ({
  children,
}) => {
  const [recommend, setRecommend] = useState(10);
  const [nextArticle, setNextArticle] = useState(5);
  const [selected, setSelected] = useState<number[]>();
  const mediaQuery = useMediaQuery('(min-width:900px)');
  const isSmall = useMediaQuery('(max-width:400px)');

  const contextValue = useMemo(
    () => ({
      isSmall,
      media: mediaQuery,
      recommend,
      nextArticle,
      selected,
      setSelected,
      setRecommend,
      setNextArticle,
    }),
    [recommend, selected, nextArticle, mediaQuery]
  );

  return (
    <OptionContext.Provider value={contextValue}>
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = (): OptionContextProps => {
  const appContext = useContext(OptionContext);
  if (!appContext) {
    throw new Error('OptionContext is not initialized');
  }
  return appContext;
};
