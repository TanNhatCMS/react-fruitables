import type React from 'react';
import { useEffect } from 'react'
import 'lightbox2/dist/css/lightbox.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import $ from 'jquery'
import 'owl.carousel'
import vegetableitem6 from '../../../../assets/images/vegetable-item-6.jpg'
import vegetableitem5 from '../../../../assets/images/vegetable-item-5.jpg'
import vegetableitem4 from '../../../../assets/images/vegetable-item-4.jpg'
import vegetableitem3 from '../../../../assets/images/vegetable-item-3.png'
import vegetableitem1 from '../../../../assets/images/vegetable-item-1.jpg'
import ProductItem from './ProductItem'

interface Product {
  image: string;
  name: string;
  type: string;
  description: string;
  price: number;
  url?: string;
}

const ListProduct : Product[] = [
  {
    name: 'Parsely',
    type: 'Vegetable',
    image: vegetableitem6,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    url: '',
    price: 4.99,
  },
  {
    name: 'Parsely',
    type: 'Vegetable',
    image: vegetableitem1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    url: '',
    price: 4.99,
  },
  {
    name: 'Banana',
    type: 'Vegetable',
    image: vegetableitem3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    url: '',
    price: 4.99,
  },
  {
    name: 'Bell Papper',
    type: 'Vegetable',
    image: vegetableitem4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    url: '',
    price: 4.99,
  },
  {
    name: 'Potatoes',
    type: 'Vegetable',
    image: vegetableitem5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    url: '',
    price: 4.99,
  },
]

declare global {
  interface JQuery {
    owlCarousel: any;
  }
}

const RelatedProducts: React.FC = () => {
  useEffect(() => {
    $('.vegetable-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      center: false,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    })
  }, [])


  return (<>
      <h1 className="fw-bold mb-0">Related products</h1>
      <div className="vesitable">
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {
            ListProduct.map((item, index) =>
              <ProductItem key={index} item={item} />,
            )
          }
        </div>
      </div>
    </>
  )
}

export default RelatedProducts
