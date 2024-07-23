import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ChildrenProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/");
    }
  });

  return children;
};
export default ProtectedRoute;
