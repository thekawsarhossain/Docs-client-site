import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardChart = () => {
  const data = [
    {
      name: "JAN.",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "FEB.",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MAR.",
      uv: 2000,
      pv: 7000,
      amt: 2290,
    },
    {
      name: "APR.",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      uv: 1890,
      pv: 9000,
      amt: 2181,
    },
    {
      name: "JUN.",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "JUL.",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="my-8 h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#0F3460"
            fill="#0F3460"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#0F766E"
            fill="#0F766E"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#CCFEDB"
            fill="#CCFEDB"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;