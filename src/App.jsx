import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration > 0;

  function handleChangeInput(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChangeInput} userInput={userInput} />
      {!validInput && (
        <p className="center">Please Enter a duration greater then zero</p>
      )}
      {validInput && <Results input={userInput} />}
    </>
  );
}

export default App;
