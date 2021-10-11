import React, { useState, useEffect } from "react";
import axios from "axios";

const HPSection2 = (props) => {
  // const [loading, setLoading] = useState(true);
  // const [text1, setText1] = useState("");
  // const [text2, setText2] = useState("");

  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .get(process.env.REACT_APP_API_URL + "/homepage")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setText1(data.section_2_text_1);
  //       setText2(data.section_2_text_2);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <center id="sub">
  //         <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
  //         <span className="sr-only">Loading...</span>
  //       </center>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <div id="sub">
        <img src={require("../../assets/img/shape34.png")} alt="shape34" className="shape34" />

        <div className="wrapper">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1>{props.homeData.section_2_text_1}</h1>
              <p>{props.homeData.section_2_text_2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default HPSection2;
