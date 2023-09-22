import React, { Component } from "react";

import phoneIcon from "../../assets/images/phoneIcon.png";

export class CallUs extends Component {
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <img width={72} src={phoneIcon} alt="img" style={{paddingTop:"2px"}}/>
        <div>
          <span
            style={{
              color: " #6E7191",
              fontSize: "18px",
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              marginBottom:"10px",
              display:"block"
            }}
          >
            CALL US NOW
          </span>
          <p
            style={{
              color: "#211F54",
              fontSize: "28px",
              fontWeight: "700",
              lineHeight: "18px",
              whiteSpace:"nowrap",
            }}
          >
            (414) 567 - 2109
          </p>
        </div>
      </div>
    );
  }
}

export default CallUs;
