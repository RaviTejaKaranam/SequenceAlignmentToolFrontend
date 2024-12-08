import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setSteps, setCurrentStep }) => {
  const [sequence1, setSequence1] = useState("");
  const [sequence2, setSequence2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true); // Set loading state before starting the computation
    setSteps([]); // Clear previous steps
    setCurrentStep(0); // Reset to step 0 (start from the first step)

    try {
      // Fetch step-by-step alignment data from the backend
      const response = await axios.post(
        "https://sequence-alignment-tool-4776a1d89ee1.herokuapp.com/api/alignment/align-steps",
        {
          sequence1,
          sequence2,
        }
      );

      // After resetting, set the new steps
      setSteps(response.data);
    } catch (error) {
      console.error("Error fetching steps:", error);
    } finally {
      setLoading(false); // Hide loading state after computation is done
    }
  };

  return (
    <div>
      <h2>Input Sequences</h2>
      <label>
        Sequence 1:
        <input
          type="text"
          value={sequence1}
          onChange={(e) => setSequence1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Sequence 2:
        <input
          type="text"
          value={sequence2}
          onChange={(e) => setSequence2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Computing..." : "Compute Step-by-Step"}
      </button>
    </div>
  );
};

export default InputForm;
