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
  recommend: number;
  setRecommend: Dispatch<SetStateAction<number>>
  nextArticle: number;
  setNextArticle: Dispatch<SetStateAction<number>>
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

  const contextValue = useMemo(
    () => ({
      recommend,
      nextArticle,
      setRecommend,
      setNextArticle
    }),
    [recommend,
    nextArticle]
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