import React, { Fragment } from "react";
import Bot from "../bot/Bot";

const Home = () => {
  return (
    <Fragment>
      <div className="container-home">
        <h1>Welcome</h1>

        <Bot />
      </div>
    </Fragment>
  );
};

export default Home;
