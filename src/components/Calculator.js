import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;
    let res;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : Infinity;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="p-4 border rounded mb-4 max-w-md mx-auto">
      <div className="flex gap-2 mb-2">
        <input
          className="border p-1 flex-1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select
          className="border p-1"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          className="border p-1 flex-1"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-2"
          type="button"
          onClick={calculate}
        >
          =
        </button>
      </div>
      {result !== null && <div className="text-xl">Result: {result}</div>}
    </div>
  );
};

export default Calculator;
