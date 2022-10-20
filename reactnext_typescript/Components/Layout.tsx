import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = ({ children }: any) => {
  // https://github.com/edshav/next-redux-saga-typescript
  return (
    <>
      <Navbar />
      <main className="ml-3 mb-5">{children}</main>
    </>
  );
};

export default Layout;
