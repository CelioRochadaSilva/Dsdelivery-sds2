import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderLocationdata, Product } from './types';
import {fetchProducts  } from '../api';
import OrderLocation from './OrderLocation';


function Orders( ) {
const[product, setProducts]= useState <Product[]>([]); 
const [orderLocation, setOrderLocation]= useState<OrderLocationdata>();

    
    useEffect(() =>{
         fetchProducts()
        .then(Response => setProducts (Response.data))
        .catch(erro => console.log(erro))
    },[]);

    return(
        <div className = "orders-container">
            <StepsHeader />
            <ProductsList products={product}/>
            <OrderLocation onChangeLocation = {location => setOrderLocation (location)} />
           
        </div>
    )
  }
  export default Orders;