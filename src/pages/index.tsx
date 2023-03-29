import React from "react";
import Header from "../components/Header";

export default function Home({ children }: any) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
