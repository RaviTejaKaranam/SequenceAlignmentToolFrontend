import React, { useState } from "react";
import InputForm from "./components/InputForm";
import StepByStepVisualization from "./components/StepByStepVisualization";
import "./App.css";

const App = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>
      <h1>Needleman-Wunsch Step-by-Step Visualization</h1>
      <InputForm setSteps={setSteps} setCurrentStep={setCurrentStep} />
      <StepByStepVisualization
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default App;
