import React from 'react'
import Product from '../../compontents/Product/Product'
import LoggedHeader from '../../compontents/Header/loggedHeader';
import Footer from "../../compontents/Footer/footer";


const ProductPage = () => {
  return (
    <div>
      <React.Fragment>
      <LoggedHeader/>
      <div>
        <Product/>
      </div>
      <Footer/>
    </React.Fragment>
    </div>
  )
}

export default ProductPage
