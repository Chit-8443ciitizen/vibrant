import { createBrowserRouter } from "react-router-dom"
import App from "../App";

import Home from "../components/Home/home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home/> },
      // { path: "signIn", element: <SignIn /> },
      // { path: "signUp", element: <SignUp/> },
      // {
      //   path: "board",
      //   element: <Board />,
      //   children: [
      //     { path: "", element: <OverView/> },
      //     { path: "overview", element: <OverView/> },
      //     { path: "today", element: <Today /> },
      //     { path: "week", element: <Week /> },
      //     { path: "month", element: <Month /> },
      //   ],
      // },
    ],
  },
]);
