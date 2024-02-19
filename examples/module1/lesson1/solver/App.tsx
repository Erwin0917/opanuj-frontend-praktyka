import React, { useState } from 'react';
import { add, divide, multiply, subtract } from './functions';

interface Operator {
  label: string,
  action: (a: number, b: number) => number
}
const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);


  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };

  const operators: Array<Operator> = [
    { label: '+', action: add },
    { label: '-', action: subtract },
    { label: '*', action: multiply },
    { label: '/', action: divide },
  ];

  const buttons = operators.map((operator: Operator) => (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() => doWork(operator.action)}
    >
      {operator.label}
    </button>
  ));

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className='grid grid-cols-4 gap-x-4 my-4'>
        <div className='grid grid-cols-4 gap-x-4 my-4'>{buttons}</div>
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
