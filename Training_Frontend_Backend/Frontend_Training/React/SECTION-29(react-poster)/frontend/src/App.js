import { useContext } from "react";
import ReactPoster from "./components/ReactPoster";
import { PosterContextProvider } from "./ContextAPI/Poster-context";
import PosterContext from "./ContextAPI/Poster-context";
import ReactPosterForm from "./components/ReactPosterForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { action as Action } from "./components/ReactPosterForm";
import { loader as Loader } from "./components/PosterList";
import PosterList from "./components/PosterList";
import React from "react";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        { path: "form", element: <ReactPosterForm />, action: Action },
        { index:true, element: <PosterList />, loader: Loader },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;

  // const cntx=useContext(PosterContext);
  // const IsNewPoster=cntx.NewPoster;
  // return (
  //   <>
  //     {IsNewPoster && <ReactPosterForm/>}
  //     <ReactPoster />
  //   </>
  // );
};

export default App;
