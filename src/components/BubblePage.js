import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/colors') // all requests besides login should use axiosWithAuth
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  }, []) // only run on mount/unmount

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;