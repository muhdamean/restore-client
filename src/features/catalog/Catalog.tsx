import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";


export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([]);
  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
       .then(response=>response.json())
       .then(data=>setProducts(data))
  },[]) //adding empty array [] stands for !IsPostBack, should not re-render on whenever the content load. render once

    return(
        <>
            <ProductList products={products}></ProductList>
        </>
        
    )
}