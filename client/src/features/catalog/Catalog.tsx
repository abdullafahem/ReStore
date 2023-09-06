import ProductList from "./ProductList";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productsSelectors } from "./catalogSlice";

const Catalog = () => {
  const products = useAppSelector(productsSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes("pending")) {
    return <LoadingComponent message="Loading products..." />;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
