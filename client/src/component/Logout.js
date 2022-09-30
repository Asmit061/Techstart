import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import { SetPopupContext } from "../App";
import { Navigate } from "react-router-dom";

  
const Logout = (props) => {
  const setPopup = useContext(SetPopupContext);
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    setPopup({
      open: true,
      severity: "success",
      message: "Logged out successfully",
    });
  }, []);
  return <Navigate to="/login" replace={true} />;
};

export default Logout;
