import React from 'react'
import LoggedHeader2 from '../../compontents/Header/loggedHeader2';
import Footer from "../../compontents/Footer/footer";
import { ItemList } from "../../compontents/ShoppingCart/ItemList"
import {ShoppingCart} from "../../compontents/ShoppingCart/ShoppingCart"
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext';

const ProductPage = () => {
  return (
    <div>
      <ShoppingCartProvider>
      <LoggedHeader2/>
      <div>
        <ItemList/>
        <ShoppingCart/>
      </div>
      <React.Fragment>
      <Footer/>
    </React.Fragment>
    </ShoppingCartProvider>
    </div>
  )
}

export default ProductPage
