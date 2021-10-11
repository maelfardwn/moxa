import React from "react";

const TGSectionVM = (props) => {
  return (
    <div>
      <div id="about-vm">
        <img src={require("../../assets/img/shape41.png")} alt="shape41" className="shape41" />

        <div className="wrapper">
          <h1>Visi & Misi</h1>
          <div className="sub-text">
            moxa berkontribusi untuk menciptakan masyarakat yang dinamis melalui beragam solusi
            keuangan terbaik dan akan terus menawarkan nilai yang hanya dapat diberikan oleh moxa.
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="vm-wrap">
                <img src={require("../../assets/img/icon/visi.png")} alt="visi" />

                <h2>Visi</h2>

                <p>
                  Menjadi platform solusi keuangan terintegrasi terbaik di kelasnya yang paling
                  diminati.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="vm-wrap misi">
                <img src={require("../../assets/img/icon/misi.png")} alt="misi" />

                <h2>Misi</h2>

                <p>
                  Menjadi platform terpercaya untuk membantu masyarakat Indonesia menyelesaikan
                  masalah keuangan dan menuju kemakmuran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TGSectionVM;
