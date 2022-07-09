import './Body.scss';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
import data from '../../../resources/data.json';

const Body: React.FC = () => {
  console.log(data);
  return (
    <div className="body-container">
      <p className="title">Spending - Last 7 days</p>
      <ResponsiveContainer width="100%" height="200px">
        <BarChart data={data}>
          <Bar dataKey="amount" />
          <XAxis dataKey="day" />
        </BarChart>
      </ResponsiveContainer>
      <hr />
      <div className="graph-analytics">
        <div>
          <p>Total this month</p>
          <p className="value">$478.33</p>
        </div>
        <div>
          <p className="value">+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
