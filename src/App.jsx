import Home from "./pages/home/Home";
import routes from "./router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Router, useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  );
}

export default App;
