import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Grid.css";

function Grid() {
  let navigate = useNavigate();
  let [data, setData] = useState("");
  let [name, setName] = useState();
  let [email, setEmail] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
  let data1 = Array.from(data);

  let addData = async () => {
    console.log(name, email);
    if(typeof(name)=="undefined" || typeof(email)=="undefined"){
      alert("Enter Valid information")
    }else{
    let result = await fetch("http://localhost:4000/post", {
      method: "post",
      body: JSON.stringify({ name: name, email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    window.location.reload();
    alert("Record Added")
  }
  };

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="enter name"
              />
            </td>
            <td>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="enter email"
              />
            </td>
            <button onClick={addData}>Add Record</button>
          </tr>

          {data1.map((data) => (
            <tr key={data._id}>
              <td>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={(e) => e.target.value}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={data.email}
                  onChange={(e) => e.target.value}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Grid;
