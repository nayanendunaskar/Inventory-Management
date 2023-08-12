import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Departments } from "./Pages/Departments/Departments";
import { ProductsListing } from "./Pages/ProductsListing/ProductsListing";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { ProductsManagement } from "./Pages/ProductsManagement/ProductsManagement";
import { SideNav } from "./Components/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/productsListingPage" element={<ProductsListing />} />
          <Route path="/ProductDetails/:productId" element={<ProductDetails />} />
          <Route path="/ProductsManagement" element={<ProductsManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;