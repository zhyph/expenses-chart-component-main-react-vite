import React from 'react';

// TODO: Pass values from props
export default function Analytics() {
  return (
    <div className="graph-analytics">
      <div>
        <p>Total this month</p>
        <p className="value">$478.33</p>
      </div>
      <div>
        <p className="value">+2.4%</p>
        <p>from last month </p>
      </div>
    </div>
  );
}
