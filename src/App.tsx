import { useState } from "react";
import { Header, InfoButton, UserInput, Results, Footer } from "./components";

export interface UserInputInterface {
  initialInvestment: number;
  monthlyInvestment: number;
  expectedReturn: number;
  duration: number;
}

const checkValuesGreaterThanZero = (inputData: UserInputInterface): boolean => {
  return Object.values(inputData).every((value) => value > 0);
};

export const App = () => {
  const [userInputData, setUserInputData] = useState<UserInputInterface>({
    initialInvestment: 1000,
    monthlyInvestment: 250,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = checkValuesGreaterThanZero(userInputData);

  const handleChangeUserInput = (
    inputIdentifier: keyof UserInputInterface,
    newValue: number
  ) => {
    setUserInputData((prevState) => ({
      ...prevState,
      [inputIdentifier]: newValue,
    }));
  };

  return (
    <>
      <Header />
      <InfoButton />
      <UserInput onChange={handleChangeUserInput} userInput={userInputData} />
      {inputIsValid ? (
        <Results data={userInputData} />
      ) : (
        <p className="errorMessage">
          Upss, enter input values greater than zero.
        </p>
      )}
      <Footer />
    </>
  );
};
