import React, { useState } from "react";
import { Button, ButtonBase } from "@mui/material";

import "./index.css";
import Waiting from "./Waiting";
import Completed from "./Completed";

const TourList = () => {
  const [status, setStatus] = useState({
    chosen: "waiting",
  });
  return (
    <div className="tour-list">
      <div className="status-bar">
        <Button
          variant={status.chosen === "waiting" ? "contained" : "text"}
          onClick={() => setStatus({ chosen: "waiting" })}
        >
          Chờ xử lý
        </Button>
        <Button
          variant={status.chosen === "completed" ? "contained" : "text"}
          onClick={() => setStatus({ chosen: "completed" })}
        >
          Đã xử lý
        </Button>
      </div>

      {status.chosen === "waiting" ? <Waiting /> : <Completed />}
    </div>
  );
};

export default TourList;
