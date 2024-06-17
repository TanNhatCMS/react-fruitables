import React from 'react'
import fruiteitem5 from '../../../../assets/images/fruite-item-5.jpg'
import fruiteitem4 from '../../../../assets/images/fruite-item-4.jpg'
import fruiteitem3 from '../../../../assets/images/fruite-item-3.jpg'
import fruiteitem2 from '../../../../assets/images/fruite-item-2.jpg'
import fruiteitem1 from '../../../../assets/images/fruite-item-1.jpg'
import ProductItem from './Product'

function ProductList() {
  const ListProduct = [
    {
      name: 'Grapes',
      type: 'Fruits',
      images: fruiteitem5,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Grapes',
      type: 'Fruits',
      images: fruiteitem5,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Raspberries',
      type: 'Fruits',
      images: fruiteitem2,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Apricots',
      type: 'Fruits',
      images: fruiteitem4,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Banana',
      type: 'Fruits',
      images: fruiteitem3,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Oranges',
      type: 'Fruits',
      images: fruiteitem1,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Raspberries',
      type: 'Fruits',
      images: fruiteitem2,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Grapes',
      type: 'Fruits',
      images: fruiteitem5,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
    {
      name: 'Oranges',
      type: 'Fruits',
      images: fruiteitem1,
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      url: '',
      price: 4.99,
    },
  ]
  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">

        {
          ListProduct.map((item, index) => (
            <ProductItem
              key={index}
              type={item.type}
              images={item.images}
              name={item.name}
              describe={item.describe}
              url={item.url}
              price={item.price} />
          ))
        }
        <div className="col-12">
          <div className="pagination d-flex justify-content-center mt-5">
            <a href="/#" className="rounded">
              «
            </a>
            <a href="/#" className="active rounded">
              1
            </a>
            <a href="/#" className="rounded">
              2
            </a>
            <a href="/#" className="rounded">
              3
            </a>
            <a href="/#" className="rounded">
              4
            </a>
            <a href="/#" className="rounded">
              5
            </a>
            <a href="/#" className="rounded">
              6
            </a>
            <a href="/#" className="rounded">
              »
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
