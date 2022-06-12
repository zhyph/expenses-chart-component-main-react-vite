const Body: React.FC = () => {
  return (
    <div className="body-container">
      <p className="title">Spending - Last 7 days</p>
      <div style={{ height: '100px', backgroundColor: '#000' }}></div>
      <hr />
      <div className="graph-analytics">
        <div>
          <p className="total title">Total this month</p>
          <p className="total value">$478.33</p>
        </div>
        <div>
          <p className="percentage value">+2.4%</p>
          <p className="percentage title">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
