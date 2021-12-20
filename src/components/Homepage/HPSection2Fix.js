import React, { useState, useEffect } from "react";
import axios from "axios";

const HPSection2Fix = (props) => {

  const productsData =
    props.products.length > 0 ? (
      props.products.map((product, i) =>
        i == 5 ? (
          <div
            className="col HPSection2"
            style={{ marginBottom: "30px", marginLeft: "120px" }}
          >
            <a
              href={`/product/detail/${product.slug}`}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                height="128px"
                width="128px"
                src={product.icon.url}
                style={{ marginBottom: "15px" }}
              />
              <br />
              <h4 className="productsWording">{product.name}</h4>
            </a>
          </div>
        ) : i == 5 && product.icon.url.match(/uploads/) ? (
          <div
            className="col HPSection2"
            style={{ marginBottom: "30px", marginLeft: "120px" }}
          >
            <a
              href={`/product/detail/${product.slug}`}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                height="128px"
                width="128px"
                src={process.env.REACT_APP_API_URL + `/${product.icon.url}`}
                style={{ marginBottom: "15px" }}
              />
              <br />
              <h4 className="productsWording">{product.name}</h4>
            </a>
          </div>
        ) : i == 8 ? (
          <div
            className="col HPSection2"
            style={{ marginBottom: "30px", marginRight: "120px" }}
          >
            <a
              href={`/product/detail/${product.slug}`}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                height="128px"
                width="128px"
                src={product.icon.url}
                style={{ marginBottom: "15px" }}
              />
              <br />
              <h4 className="productsWording">{product.name}</h4>
            </a>
          </div>
        ) : i == 8 && product.icon.url.match(/uploads/) ? (
          <div
            className="col HPSection2"
            style={{ marginBottom: "30px", marginRight: "120px" }}
          >
            <a
              href={`/product/detail/${product.slug}`}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                height="128px"
                width="128px"
                src={process.env.REACT_APP_API_URL + `/${product.icon.url}`}
                style={{ marginBottom: "15px" }}
              />
              <br />
              <h4 className="productsWording">{product.name}</h4>
            </a>
          </div>
        ) : product.icon.url.match(/uploads/) ? (
          <div className="col HPSection2" style={{ marginBottom: "30px" }}>
            <a
              href={`/product/detail/${product.slug}`}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                height="128px"
                width="128px"
                src={process.env.REACT_APP_API_URL + `/${product.icon.url}`}
                style={{ marginBottom: "15px" }}
              />
              <br />
              <h4 className="productsWording">{product.name}</h4>
            </a>
          </div>
        ) : (
          <div className="col HPSection2" style={{ marginBottom: "30px" }}>
            <a
              href={`/product/detail/${product.slug}`}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                height="128px"
                width="128px"
                src={product.icon.url}
                style={{ marginBottom: "15px" }}
              />
              <br />
              <h4 className="productsWording">{product.name}</h4>
            </a>
          </div>
        )
      )
    ) : (
      <h2>loading..</h2>
    );

  return (
    <div>
      <div id="sub">
        <div className="wrapper">
          <div className="row" style={{ marginBottom: "35px" }}>
            <div className="col-lg-10 m-auto">
              <h1>Jelajahi Berbagai Pilihan Produk Moxa </h1>
              <p>
                Rasakan kemudahan mengajukan beragam produk keuangan dalam satu
                sentuhan lewat fitur unggulan Moxa{" "}
              </p>
            </div>
          </div>
          <div className="row HPSection2-wrapper">{productsData}</div>
        </div>
      </div>
    </div>
  );
};
export default HPSection2Fix;
