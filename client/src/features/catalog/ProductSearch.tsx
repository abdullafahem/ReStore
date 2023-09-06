import { TextField, debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";
import { useState } from "react";

const ProductSearch = () => {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
  const dispatch = useAppDispatch();

  const debouncedSearch = debounce((e: any) => {
    dispatch(setProductParams({ searchTerm: e.target.value }));
  }, 1000);
  return (
    <TextField
      label="Search Products"
      variant="outlined"
      fullWidth
      value={searchTerm || ""}
      onChange={(e: any) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e);
      }}
    />
  );
};

export default ProductSearch;
