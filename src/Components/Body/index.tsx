import React, { useEffect } from 'react';
import './Body.scss';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Cell,
} from 'recharts';
import data from '../../../resources/data.json';

//  data: { day: string; amount: number; highest?: boolean | undefined }[]
interface dataType {
  day: string;
  amount: number;
  highest?: boolean | undefined;
}

const Body: React.FC = () => {
  const [dataState, setDataState] = React.useState<dataType[]>([]);
  const [mousePos, setMousePos] = React.useState<{
    x?: number;
    y?: number;
  }>({});

  useEffect(() => {
    setDataState(findMaxAndMutateObjAtt(data));
  }, []);

  const findMaxAndMutateObjAtt = (data: dataType[]) => {
    const max = data.reduce((a, b) => (a.amount > b.amount ? a : b));
    data.forEach((obj) => {
      if (obj.amount === max.amount) {
        obj.highest = true;
      }
    });
    return data;
  };

  return (
    <div className="body-container">
      <p className="title">Spending - Last 7 days</p>
      <div className="bar-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart margin={{ top: 40 }} data={dataState}>
            <Bar
              dataKey="amount"
              radius={[5, 5, 5, 5]}
              onMouseOver={(posIn) => {
                setMousePos(posIn);
              }}
              onMouseLeave={() => {
                setMousePos({});
              }}
              maxBarSize={50}
            >
              {dataState.map(({ highest }, i) => {
                return (
                  <Cell
                    key={`cell-${i}`}
                    className={highest ? 'highest' : ''}
                  />
                );
              })}
            </Bar>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length)
                  return (
                    <div className="tooltip">
                      <p>{`$${payload[0].value}`}</p>
                    </div>
                  );
                return null;
              }}
              position={{
                x: mousePos.x ? mousePos.x - 15 : undefined,
                y: mousePos.y ? mousePos.y - 40 : undefined,
              }}
              cursor={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#93867b', fontSize: '.8rem' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
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
