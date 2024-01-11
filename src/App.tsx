import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./routes/RouterConfig";

import "./styles/tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
