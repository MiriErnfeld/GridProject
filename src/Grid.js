import React from 'react';
  const arr = [];

const Grid = ({ config, data }) => (

  <table>
    <thead>
      <tr>
        {config.map((item, index) => (
          <th key={index}>{item.title}
            {/* {console.log(item.title)} */}
            {arr.push(item.field)}
          </th>
        ))}
        {/* <th>Col 1</th>
      <th>Col 2</th> */}
      </tr>
    </thead>
    <tbody>
      {data.map((item1, index1) => (
        <tr>
          {arr.map((item, index) => (
            <td>{item1[arr[index]]}</td>
          ))}

        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;