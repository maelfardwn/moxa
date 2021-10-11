import React from "react";

const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="wrapper">
          <h3>Butuh Bantuan?</h3>

          {/* <div className="c-1">
              <h5>Hubungi Kami</h5>
              <a href="#">
                <p>(021) 987654321</p>
              </a>
            </div> */}

          <div className="c-1">
            <h5>Email Kami</h5>
            <a href="mailto:cs@moxa.id">
              <p>cs@moxa.id</p>
            </a>
          </div>

          {/* <button>Chat Dengan Moxa</button> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
