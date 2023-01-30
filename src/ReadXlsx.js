import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ReadXlsx() {
  const [excelData, setexcelData] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws, { raw: false });

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setexcelData(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">column1</th>
            <th scope="col">column2</th>
            <th scope="col">column3</th>
            <th scope="col">column4</th>
            <th scope="col">column5</th>
            <th scope="col">column6</th>
            <th scope="col">column7</th>
          </tr>
        </thead>
        <tbody>
          {excelData.map((d) => (
            <tr key={d.column1}>
              <th>{d.column1}</th>
              <th>{d.column2}</th>
              <th>{d.column3}</th>
              <th>{d.column4}</th>
              <th>{d.column5}</th>
              <th>{d.column6}</th>
              <th>{d.column7}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReadXlsx;
