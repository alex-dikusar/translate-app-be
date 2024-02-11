import { createContext, PropsWithChildren, useMemo, useState } from 'react';

type ContextProps = {
  searchStr?: string;
  setSearchStr: (value: string) => void;
};

export const SearchContext = createContext<ContextProps>({
  setSearchStr: () => null,
});

function SearchProvider({ children }: PropsWithChildren) {
  const [searchStr, setSearchStr] = useState<string>();
  const value = useMemo(
    () => ({ searchStr, setSearchStr }),
    [searchStr, setSearchStr],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
