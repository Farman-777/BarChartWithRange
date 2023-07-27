import React from "react";
import { SubArrays } from "./ApiHitsData";
import "./BarTable.css"

const BarTable = ({ listData, handleClose }) => {
  const keys = Object.keys(SubArrays[0][0]);

  return (
    <div className="bar-table-container">
      <div className="bar-table-content">
        <button onClick={handleClose} className="close-button">X</button>
        <table className="table table-hover border border-dark w-75 mx-4 mt-2">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">{keys[0]}</th>
              <th scope="col">{keys[1]}</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((element, index) => (
              <tr key={index}>
                <td>{element.gstrUrl}</td>
                <td>{element.urlHitCounts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarTable;

