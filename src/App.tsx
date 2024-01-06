import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};

export default App;
