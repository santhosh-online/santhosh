import * as React from "react";
import "./assets/styles/style.css";

function NameCount() {
  return (
    <div className="row name-count-row">
      <div className="container name-count">
        <div className="col-md-6">
          <h3>
            Santhosh/<span className="name-tag">Portifolio</span>
          </h3>
        </div>
        <div className="col-md-6">
          <div className="col-md-3">
            {" "}
            <p>Website Visitors</p>
          </div>
          <div className="col-md-3">
            {" "}
            <img
              src="https://counter9.stat.ovh/private/freecounterstat.php?c=sqdxsfzqcq9wml6c54lx1bcbnzqdecnn"
              border="0"
              title="page counter"
              alt="page counter"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameCount;
