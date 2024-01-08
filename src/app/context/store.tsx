"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  name: String;
  description: String;
  dos: dos[];
  education: education[];
  skills: skills[];
  salaries: Salary;
  schools: unis;
};

type dos = String;
type education = String;
type skills = String;
type Salary = {
  MAW: String;
  MHW: String;
  TEN: String;
};
type unis = {
  name: String;
  nickname: String;
  founded: number;
  location: String;
  logo: String;
  icon: String;
  website: String;
  type: String;
};

type UnisType = {
  map(arg0: (item: any, i: any) => React.JSX.Element): React.ReactNode;
  name: String;
  nickname: String;
  location: String;
  logo: String;
  icon: String;
  website: String;
  type: String;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState<[] | DataType[]>([]);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
