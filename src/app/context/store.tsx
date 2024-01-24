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

// Certainly! Here are comments on the provided code:

// 1. **Use of TypeScript:**
//    - It's great to see TypeScript being used for type safety. The defined types (`Dos`, `Education`, `Skills`, `Salaries`, `Schools`, `CareerCategory`, and `AssDataType`) help in catching potential errors during development.

// 2. **Type for Schools:**
//    - The comment prompts the developer to replace the placeholder `any` with the actual type structure for schools. This is good practice for enhancing type safety.

// 3. **CareerCategory Interface:**
//    - The `CareerCategory` interface nicely captures the structure of a career category, allowing for nested categories, dos, education, skills, salaries, schools, and skillsArray. Consider adding more specific types based on your application's needs.

// 4. **AssDataType Interface:**
//    - The `AssDataType` interface defines the structure for assessment data. Ensure it covers all the necessary fields required for representing assessment information.

// 5. **ContextProps Interface:**
//    - The `ContextProps` interface defines the structure of the context value, providing clarity on the expected shape of the data and state-setting functions.

// 6. **GlobalContext Context Provider:**
//    - The `GlobalContextProvider` uses `createContext` and `useState` to create a context provider. The default values for `data` and `assData` are empty arrays, offering a clean starting point.

// 7. **Default Values in createContext:**
//    - Default values for `data` and `assData` are set as empty arrays, which is a reasonable choice. Ensure it aligns with your application's logic.

// 8. **Value in GlobalContext.Provider:**
//    - The `value` prop in `GlobalContext.Provider` is set with the state and setter values. This is crucial for providing the context's data to consuming components.

// 9. **useGlobalContext Hook:**
//    - The `useGlobalContext` hook correctly uses the `useContext` hook to access the context's value, allowing components to consume the global state.

// 10. **State Initialization:**
//     - Ensure that the initial state types (`data` and `assData`) match the types defined in your TypeScript interfaces.

// 11. **Code Formatting:**
//     - The code is well-formatted and follows a clean structure, enhancing readability.

// In summary, the code demonstrates good TypeScript usage, and the context management setup follows best practices. Consider making specific type definitions more detailed based on your application's requirements.
