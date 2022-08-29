import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>Rio Pastaza y Rio Zamora,
        Quito, Ecuador.
      </p>

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:davidtorroija@gmail.com">davidtorroija@gmail.com</a>
      </p>

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +593 99 695 8394">+593 99 695 8394</a>
      </p>
    </>
  );
};

export default Address;
