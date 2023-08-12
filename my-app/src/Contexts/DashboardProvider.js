import { useContext, useReducer } from "react";
import { createContext } from "react";
import { InventoryData } from "../Database/InventoryData";

const DashboardContext = createContext();
export const DashboardProvider = ({ children }) => {
  const dashboardReducer = () => {};
  const totalStock = InventoryData.reduce(
    (totalStock, Inventory) => (totalStock += Inventory.stock),
    0
  );
  const totalDelivered = InventoryData.reduce(
    (totalDelivered, Inventory) => (totalDelivered += Inventory.delivered),
    0
  );
  const lowStockItems = InventoryData.filter(
    (Inventory) => Inventory.stock <= 10
  ).length;

  const initialState = {};
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    initialState
  );
  return (
    <DashboardContext.Provider
      value={{ totalStock, totalDelivered, lowStockItems }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export const useDashboardData = () => useContext(DashboardContext);