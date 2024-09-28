import { green } from "@mui/material/colors";
import "./App.css";
import BasicTable from "./Item";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";

function App() {
  const [statedata, setstatedata] = useState([]);
  const [editflage, seteditflage] = useState("");
  let topicref = useRef();
  let descref = useRef();

  function addData() {
    if (editflage) {
      console.log(editflage);

      let newmapData = statedata.map((item) => {
        if (item.id == editflage) {
          (item.name = topicref.current.value),
            (item.desc = descref.current.value);
        }

        return item;
      });

      setstatedata(newmapData);

      topicref.current.value = "";
      descref.current.value = "";

      seteditflage("");
    } else {
      setstatedata((prev) => [
        ...prev,
        {
          name: topicref.current.value,
          desc: descref.current.value,
          id: Math.random(),
        },
      ]);

      console.log(statedata);

      topicref.current.value = "";
      descref.current.value = "";
    }
  }

  function deleteData(name) {
    // console.log(name);
    let newDeleted = statedata.filter((item) => item.name !== name);
    setstatedata(newDeleted);
  }
  function editData(name) {
    let newDeleted = statedata.filter((item) => item.name == name);
    console.log(newDeleted);

    console.log(editflage);
    topicref.current.value = newDeleted[0].name;
    descref.current.value = newDeleted[0].desc;

    seteditflage(newDeleted[0].id);
  }

  return (
    <>
      <div className="container">
        <h2>React CRUD And Material UI</h2>

        <div className="inner_div">
          <div className="search_div">
            <MenuIcon sx={{ color: "#fff" }} />
            <input type="text" placeholder="Topic" id="topic" ref={topicref} />
            <input
              type="text"
              placeholder="Description"
              id="desc"
              ref={descref}
            />
          </div>
          <Button
            variant="contained"
            style={{ margin: "2rem 0" }}
            onClick={() => addData()}
          >
            {editflage ? "Done" : "Add Blog"}
          </Button>

          <BasicTable
            statedata={statedata}
            deleteData={deleteData}
            editData={editData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
