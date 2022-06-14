import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";


export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([]);
    const [loading,setLoading]=useState(true);

  useEffect(()=>{
      agent.Catalog.list()
      .then(products=>setProducts(products))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
  },[]) //adding empty array [] stands for !IsPostBack, should not re-render on whenever the content load. render once

  if(loading) return <LoadingComponent message="Loading products..."></LoadingComponent>

    return(
        <>
            <ProductList products={products}></ProductList>
        </>
        
    )
}