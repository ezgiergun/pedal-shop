import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import SearchResults from "./pages/SearchResults";
import Card from "./pages/Checkout";
import Locator from "./pages/Locator";
import Register from "./account/Register";
import Login from "./account/Login";
import Support from "./pages/Support";
import About from "./pages/About";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="results" element={<SearchResults />} />
          <Route path="card" element={<Card />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="locator" element={<Locator />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/products/:productName" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
