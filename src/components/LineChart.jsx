import { useEffect, useState } from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("users.json")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className="my-8 ">
      <LChart width={700} height={400} data={users}>
        <XAxis dataKey="name" />
        <YAxis/>
        <Line dataKey="age" stroke="red"></Line>
        <Line dataKey="id" stroke="orange"></Line>
      </LChart>
    </main>
  );
};

export default LineChart;
