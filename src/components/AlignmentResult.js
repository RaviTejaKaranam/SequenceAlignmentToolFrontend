import React from "react";

const AlignmentResult = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h2>Alignment Result</h2>
      <p>
        <strong>Aligned Sequence 1:</strong> {result.alignedSequence1}
      </p>
      <p>
        <strong>Aligned Sequence 2:</strong> {result.alignedSequence2}
      </p>
      <p>
        <strong>Alignment Score:</strong> {result.alignmentScore}
      </p>
    </div>
  );
};

export default AlignmentResult;
