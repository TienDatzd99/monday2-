// import { DatePicker } from "antd";
// import * as React from "react";
import { useRoutes } from "react-router-dom";
import SignUpNews from "../pages/SignUpNew/SignUpNews";

function useRoutesCustom() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <div>
             <SignUpNews />;
        </div>
      ),
     
    },
    
  ]);

  return element;
}
export default useRoutesCustom