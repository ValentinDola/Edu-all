"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type Dos = string[];
type Education = string[];
type Skills = string[];
type Salaries = {
  MAW: string;
  MHW: string;
  TEN: string;
};
type Schools = /* type for schools data */ any; // Please replace this with the actual type

interface CareerCategory {
  name: string;
  categories?: CareerCategory[];
  description?: string;
  dos?: Dos;
  education?: Education;
  skills?: Skills;
  salaries?: Salaries;
  schools?: Schools;
  skillsArray?: Skills;
}

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
  data: CareerCategory[];
  setData: Dispatch<SetStateAction<CareerCategory[]>>;
  assData: AssDataType[];
  setAssData: Dispatch<SetStateAction<AssDataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [] as CareerCategory[],
  setData: (): CareerCategory[] => [],
  assData: [] as AssDataType[],
  setAssData: (): AssDataType[] => [],
});

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<[] | CareerCategory[]>([]);
  const [assData, setAssData] = useState<[] | AssDataType[]>([]);
  return (
    <GlobalContext.Provider value={{ data, setData, assData, setAssData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
