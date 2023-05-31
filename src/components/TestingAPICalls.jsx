import React, { useEffect, useState } from "react";
import { FetchData } from "../utils/services";
import '../style.css'
const TestingAPICalls = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div className="center bigFont">
      <div>
        {data.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TestingAPICalls;
