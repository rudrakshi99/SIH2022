import "./App.css";
import CancellationPolicy from "./pages/cancellationPage/CancellationPolicy";
import Home from "./pages/Home";
import Product from "./pages/product/Product";
import SupportEngine from "./components/ChatSupport/SupportEngine/index";
import PreHeader from "./components/preheader/PreHeader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddProduct from "./pages/addProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <PreHeader />
      <Header />
      {/* <Home /> */}
      <AddProduct />
      {/* <CancellationPolicy /> */}
      {/* <Product /> */}
      <Footer />
      <SupportEngine />
      
    </div>
  );
}

export default App;
