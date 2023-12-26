import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../../app/api";

type Props = {
  children: ReactNode;
};

const Protected: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const role: Role | null = localStorage.getItem("role") as Role;

  const jwt_token: string | null = localStorage.getItem("jwt_token") || null;

  useEffect(() => {
    if (!(jwt_token && role == "advertiser")) {
      navigate("/login", { replace: true });
    }
  }, [role, jwt_token])

  return <>{children}</>;
};

export default Protected;
