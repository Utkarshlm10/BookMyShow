import React from "react";
import { Route } from "react-router-dom";


// Layout
import DefaultLayout from "../layouts/Default.loyout";


const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;
