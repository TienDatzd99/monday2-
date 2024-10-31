// import { DatePicker } from "antd";
// import * as React from "react";
import { useRoutes } from "react-router-dom";
import SignUpNews from "../pages/SignUpNew/SignUpNews";
import AccountForm from "../pages/SignUpNew/AccountForm";

function useRoutesCustom() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <div>
             <SignUpNews />;
        </div>
      ),
      // children:[
      //   {
       
        
      //   }
      // ]
    
    },
    { path: "accountForm", element: <AccountForm /> },
  ]);

  return element;
}
export default useRoutesCustom