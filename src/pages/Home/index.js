import { useState } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  // let a = 100
  // function plus() {
  //     console.log('123')
  //     a = 100 + 200
  //   }

  // let a = 100
  //         const [a, setA]= useState(100)
  //     function plus() {
  //         console.log('123')
  //     // setA(200+300)
  //     setA(function(prev){
  // return prev + 300
  //     })

  const [data, setData] = useState([]);

  return (
    <div className="app">
      {/* {a}
    <button onClick={plus}>++</button> */}
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
