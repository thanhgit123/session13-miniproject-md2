import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {action} from '../../action/action.js'
export default function Products() {
  const [products, setProducts] = useState([]);

  const data =  useSelector(store=>store)
  const ditpatch = useDispatch()

  const handleClick=(item)=>{
    ditpatch(action("add",item))
 }


  useEffect(() => {
    fetch("http://localhost:7000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts([...data]);
      });
  },[]);
  return (
    <>
      <div className="grid grid-cols-3 gap-3 pl-20 mt-10">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex">
                <img src={item.image} alt="" className="w-60 h-32" />
                <div className="leading-10 pl-10">
                  <p>Name:{item.name}</p>
                  <p>Price:{item.price}</p>
                  <button onClick={()=>handleClick(item)} className="bg-red-300 rounded-md w-32">
                    Add your cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
