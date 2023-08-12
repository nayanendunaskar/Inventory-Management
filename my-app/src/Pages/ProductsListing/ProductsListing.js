import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductsProvider";
import "./ProductsListing.css";
export const ProductsListing = () => {
  const { productsState, productsDispatch } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <h1>Products</h1>
      <select
        value={productsState.currentDepartment}
        onChange={(event) =>
          productsDispatch({
            type: "FILTER_BY_DEPARTMENT",
            payload: event.target.value,
          })
        }
      >
        <option value="All">All Departments</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={productsState.areLowStockItems}
          onChange={(event) =>
            productsDispatch({
              type: "LOW_STOCK_ITEMS",
              payload: event.target.checked,
            })
          }
        />
        Low Stock Items
      </label>

      <select
        onChange={(event) =>
          productsDispatch({ type: "SORT_BY", payload: event.target.value })
        }
      >
        <option value="sort">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
      <button onClick={() => navigate("/productManagement")}>New</button>
      <div className="all-products">
        {productsState?.filteredProducts?.length ? (
          productsState?.filteredProducts.map(
            ({
              id,
              department,
              name,
              description,
              price,
              stock,
              sku,
              supplier,
              delivered,
              imageUrl,
            }) => (
              <div
                className="single-product"
                key={id}
                onClick={() => navigate(`/ProductDetails/${id}`)}
              >
                <img src={imageUrl} alt={name} />
                <div>{name}</div>
                <p>{description}</p>
                <p>{price}</p>
                <p>{stock}</p>
                <p>{supplier}</p>
              </div>
            )
          )
        ) : (
          <h2>No Products Available.</h2>
        )}
      </div>
    </>
  );
};