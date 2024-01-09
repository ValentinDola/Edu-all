"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  categories(
    arg0: (item: any, i: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  name: String;
  description: String;
  dos: dos[];
  education: education[];
  skills: skills[];
  salaries: Salary;
  schools: unis;
  skillsArray: skills[];
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

type AssDataType = {
  firstName: String;
  lastName: String;
  monthOf: String;
  date: String;
  year: String;
  ethnicOf: String;
  gender: String;
  graduation: String;
  currently: String;
  region: String;
  type: String;
  skill: String;
  career: String;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  assData: AssDataType[];
  setAssData: Dispatch<SetStateAction<AssDataType>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [] as DataType[],
  setData: (): DataType[] => [],
  assData: [] as AssDataType[],
  setAssData: (): AssDataType[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState<[] | DataType[]>([]);
  const [assData, setAssData] = useState<[] | AssDataType[]>([]);
  return (
    <GlobalContext.Provider value={{ data, setData, assData, setAssData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
