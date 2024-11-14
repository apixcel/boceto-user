import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/index.tsx";
import ReduxProvider from "./components/provider/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  </>
);
