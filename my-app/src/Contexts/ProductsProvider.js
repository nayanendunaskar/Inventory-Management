import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { InventoryData } from "../Database/InventoryData";
import { ProductsReducer } from "../Reducers/ProductsReducer";

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const departments = ["Kitchen", "Clothing", "Toys"];

  const initialState = {
    products: InventoryData,
    filteredProducts:
      JSON.parse(localStorage.getItem("currentProducts")) || InventoryData,
    areLowStockItems: false,
    currentDepartment:
      JSON.parse(localStorage.getItem("currentDepartment")) || "All",
    newProduct: {
      id: "",
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    },
  };

  const [productsState, productsDispatch] = useReducer(
    ProductsReducer,
    initialState
  );
  useEffect(() => {
    localStorage.setItem(
      "currentProducts",
      JSON.stringify(productsState?.filteredProducts || {})
    );
    localStorage.setItem(
      "currentDepartment",
      JSON.stringify(productsState?.currentDepartment || "")
    );
  }, [productsState.filteredProducts, productsState.currentDepartment]);
  return (
    <ProductsContext.Provider
      value={{ departments, productsState, productsDispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => useContext(ProductsContext);