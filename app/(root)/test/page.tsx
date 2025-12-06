import React from "react";

const TestPage = () => {
  return (
    <div className="w-full h-[500px] bg-amber-200">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 bg-red-300">Spans 2 columns</div>
        <div className="bg-blue-300">Normal</div>
        <div className="bg-green-300">Normal</div>
      </div>
    </div>
  );
};

export default TestPage;
