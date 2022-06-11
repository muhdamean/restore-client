import { Button} from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

// interface Props{
//     products:Product[];
//     addProduct:()=>void;
// }
export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([]);
  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
       .then(response=>response.json())
       .then(data=>setProducts(data))
  },[]) //adding empty array [] stands for !IsPostBack, should not re-render on whenever the content load. render once
//   function addProduct(){
//     setProducts(prevState=>[...prevState,
//       {
//         id:prevState.length+101,
//         name:'product'+(prevState.length+1),
//         price:(prevState.length*100)+100,
//         brand:'some brand',
//         description:'some description',
//         pictureUrl:'http://picsum.photos/200',
//       }
//     ])
//     //setProducts(prevState=>[...products,{name:'product'+(prevState.length+1),price:(prevState.length*100)+100}])
//   }
    return(
        <>
            <ProductList products={products}></ProductList>
             {/* <Button variant='contained' onClick={addProduct}>Add Product</Button> */}
        </>
        
    )
}