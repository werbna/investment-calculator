import Header from "./components/Header/Header"
import Results from "./components/Results/Results"
import UserInput from "./components/UserInput/UserInput"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 5000,
    expectedReturn: 4.5,
    duration: 10
  })

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!isValidInput && <p className="center">Please enter a valid duration</p>}
      {isValidInput && <Results input={userInput} />}
    </>
  )
}

export default App
