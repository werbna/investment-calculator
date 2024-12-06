import Header from "./components/Header/Header"
import Results from "./components/Results/Results"
import UserInput from "./components/UserInput/UserInput"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 12
  })

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </>
  )
}

export default App
