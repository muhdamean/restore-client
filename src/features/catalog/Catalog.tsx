import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";


export default function Catalog(){
    const products=useAppSelector(productSelectors.selectAll);
    const {productsLoaded,status}=useAppSelector(state=>state.catalog);
    const dispatch=useAppDispatch();

  useEffect(()=>{
    if(!productsLoaded) dispatch(fetchProductsAsync());
    //   agent.Catalog.list()
    //   .then(products=>setProducts(products))
    //   .catch(error=>console.log(error))
    //   .finally(()=>setLoading(false))
  },[productsLoaded,dispatch]) //adding empty array [] stands for !IsPostBack, should not re-render on whenever the content load. render once

  if(status.includes('pending')) return <LoadingComponent message="Loading products..."></LoadingComponent>

    return(
        <>
            <ProductList products={products}></ProductList>
        </>
        
    )
}