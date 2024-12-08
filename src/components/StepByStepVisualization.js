import React from "react";

const StepByStepVisualization = ({ steps, currentStep, setCurrentStep }) => {
  if (!steps || steps.length === 0) return null;

  const { matrix, currentCell, explanation } = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <h3>
        Step {currentStep + 1} / {steps.length}
      </h3>
      <table border="1">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    backgroundColor:
                      currentCell &&
                      currentCell[0] === rowIndex &&
                      currentCell[1] === colIndex
                        ? "lightblue"
                        : "white",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>{explanation}</p>
      <button onClick={handlePrevious} disabled={currentStep === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentStep === steps.length - 1}>
        Next
      </button>
    </div>
  );
};

export default StepByStepVisualization;
