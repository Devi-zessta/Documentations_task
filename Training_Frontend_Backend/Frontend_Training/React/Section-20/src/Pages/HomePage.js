import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate=useNavigate();
  const navigateHandler=()=>{
    navigate('/products');
  }
  return (
    <>
      <h1>Welcome To Home Page</h1>
      <button onClick={navigateHandler}>navigate</button>
    </>
  );
}

export default HomePage;
