import { Outlet } from "react-router-dom";
import MenuPortal from "./components/MenuPortal";

function App() {
  return (
    <>
      <MenuPortal />
      <Outlet />
    </>
  );
}

export default App;
