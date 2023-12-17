import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Protected: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  type Role = "advertiser" | "publisher";
  const role: Role = localStorage.getItem("role");

  const jwt_token: string = JSON.parse(localStorage.getItem("jwt_token"));

  useEffect(() => {
    if (!(jwt_token && role == "advertiser")) {
      navigate("/login", { replace: true });
    }
  }, [role, jwt_token])

  return <>{children}</>;
};

export default Protected;
