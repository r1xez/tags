import React from "react";

export default function Chart() {
 
  let total = 0;
  for (let i = 0; i < 20000000; i++) {
    total += Math.sqrt(i)  ** 2;
  }

  return (
    <div>
      <h2>Chart component loaded!</h2>
      <p>Heavy calculation result: {total.toFixed(2)}</p>
    </div>
  );
}