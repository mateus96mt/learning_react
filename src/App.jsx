import Header from "./assets/components/Header";
import InputContainer from "./assets/components/InputContainer";
import ResultComponent from "./assets/components/ResultComponent";
import { calculateInvestmentResults } from "./util/investment";
import React from "react";

function App() {
  const [inputComponentsData, setInputComponentsData] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  const [investmentData, setInvestmentData] = React.useState(calculateInvestmentResults({
    initialInvestment: inputComponentsData.initialInvestment,
    annualInvestment: inputComponentsData.annualInvestment,
    expectedReturn: inputComponentsData.expectedReturn,
    duration: inputComponentsData.duration,
  }));

  const onChangeInputFields = (field, value) => {
    setInputComponentsData(prev => ({
      ...prev,
      [field]: value
    }));

    setInvestmentData(calculateInvestmentResults({
      ...inputComponentsData,
      [field]: value
    }));
  };

  console.log(inputComponentsData)

  return (
    <>
      <Header />
      <InputContainer inputComponentsData={inputComponentsData} onChange={onChangeInputFields} />
      <ResultComponent investmentData={investmentData} />
    </>
  )
}

export default App
