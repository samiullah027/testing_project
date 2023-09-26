import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const studendt_data = [
    {
      first_name: "Muhammad",
      last_name: "Ali",
      age: "11/07/1996",
      subject_marks: {
        eng: 70,
        urdu: 90,
        math: 80,
        chem: 85,
        comp: 91,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Muzzam",
      age: "02/06/1996",
      subject_marks: {
        eng: 60,
        urdu: 70,
        math: 90,
        chem: 87,
        comp: 95,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Mudassir",
      age: "03/05/1996",
      subject_marks: {
        eng: 80,
        urdu: 60,
        math: 50,
        chem: 75,
        comp: 93,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Shoaib",
      age: "11/04/1996",
      subject_marks: {
        eng: 65,
        urdu: 70,
        math: 70,
        chem: 75,
        comp: 92,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Aqib",
      age: "09/03/1995",
      subject_marks: {
        eng: 75,
        urdu: 60,
        math: 70,
        chem: 65,
        comp: 98,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Subahn",
      age: "06/05/1995",
      subject_marks: {
        eng: 78,
        urdu: 50,
        math: 67,
        chem: 78,
        comp: 89,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "rana",
      age: "09/08/1997",
      subject_marks: {
        eng: 50,
        urdu: 60,
        math: 86,
        chem: 76,
        comp: 86,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Ahmed",
      age: "12/08/1995",
      subject_marks: {
        eng: 60,
        urdu: 40,
        math: 76,
        chem: 67,
        comp: 83,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Ahsan",
      age: "04/07/1998",
      subject_marks: {
        eng: 55,
        urdu: 44,
        math: 67,
        chem: 43,
        comp: 81,
      },
      total_marks: 500,
    },
    {
      first_name: "Muhammad",
      last_name: "Irfan",
      age: "01/03/1996",
      subject_marks: {
        eng: 70,
        urdu: 80,
        math: 87,
        chem: 77,
        comp: 84,
      },
      total_marks: 500,
    },
  ];

  const getCurrentAge = (age) => {
    var dob = new Date(age);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleMarks = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <table width={"100%"}>
        <tr>
          <th>Roll num</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>Total Marks</th>
          <th>Obtain Marks</th>
          <th>Status</th>
        </tr>
        {studendt_data.map((item, index) => {
          const total_number =
            item.subject_marks.chem +
            item.subject_marks.comp +
            item.subject_marks.eng +
            item.subject_marks.math +
            item.subject_marks.urdu;

          return (
            <tr key={index}>
              <td>{index}</td>
              <td>
                {item.first_name} {item.last_name}
              </td>
              <td>{getCurrentAge(item.age)}</td>
              <td>{item.total_marks}</td>
              <td>
                {activeIndex === index ? (
                  <span>{total_number}</span>
                ) : (
                  <button className="btn" onClick={() => toggleMarks(index)}>
                    Show Marks
                  </button>
                )}
              </td>
              <td>
                {(total_number / item.total_marks) * 100 > 80 ? "Pass" : "Fail"}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
