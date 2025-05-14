import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const TodoBarChart = ({ data }) => {
  return (
    <ResponsiveContainer
      minWidth={"100%"}
      height={"87%"}
      className="absolute -left-8 top-11 m-2"
    >
      <BarChart data={data} barGap={10}>
        <CartesianGrid
          strokeDasharray="4 4"
          stroke="#333"
          horizontal={false}
          vertical={false}
        />
        <XAxis
          dataKey="category"
          stroke="#ccc"
          tick={{
            fontSize: "0.9rem",
            fill: "#fff",
            fontWeight: "400",
          }}
        />
        <YAxis stroke="#ccc" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 31, 31, 0.8)",
            borderRadius: "0.375rem", // rounded-md
            border: "none",
            padding: "0.4rem",
          }}
          cursor={{
            fill: "rgba(31, 31, 31, 0.4)",
            stroke: "rgba(31, 31, 31, 0.6)",
            strokeWidth: 1,
          }}
          itemStyle={{
            marginBottom: "2px",
            color: "#fff",
            fontSize: "0.85rem",
          }}
        />

        <Bar radius={[8, 8, 0, 0]} dataKey="completed" fill="#E3F717" />
        <Bar radius={[8, 8, 0, 0]} dataKey="remaining" fill="#2ACAE5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TodoBarChart;
