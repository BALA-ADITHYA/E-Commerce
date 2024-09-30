import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {

    const {product}  =props;

  return (
    <div className='breadcrumb'>
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" /> {product.ShopCategory}
      <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrumb
