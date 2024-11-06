// import { DatePicker } from "antd";
// import * as React from "react";
import { useRoutes } from "react-router-dom";
import SignUpNews from "../pages/SignUpNew/SignUpNews";
import AccountForm from "../pages/SignUpNew/AccountForm";
import InviteMember from "../pages/InviteMember/InviteMember";
import CreatBoardTemplate from "../templates/CreatBoardTemplate/CreatBoardTemplate";

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
    { path: "invitemember", element: <InviteMember /> },
    { path: "Board", element: <CreatBoardTemplate /> },
  ]);

  return element;
}
export default useRoutesCustom