import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import Root from "./Pages/root";
import Error from "./components/Error";
import ProductDetails from "./components/ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index:true, element: <HomePage /> },//path: "/"
      { path: "/products", element: <ProductsPage /> },
      { path:"/products/:productId",element:<ProductDetails/>}
    ],
  }, 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/***************************************Second approach**********************************************/

// import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import ProductsPage from "./components/ProductsPage";

// const routes=createRoutesFromElements(
//   <Route>
//    <Route path='/' element={<HomePage/>}/>
//    <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// );
// const router=createBrowserRouter(routes);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
