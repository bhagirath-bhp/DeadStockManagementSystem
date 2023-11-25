import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = ({ data }) => {
  let { state } = useLocation();
  console.log("This is state", state)
  return (
    <div>
      <h2>Table 1</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))} */}
        </tbody>
      </table>

      <h2>Table 2</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.value}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Product;