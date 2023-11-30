import React from 'react'
import './ShoppingTools.css'
import Compare from './Images/compare.webp'
import LocateADealer from './Images/locate-a-dealer.webp'
import PorscheLifestyle from './Images/porsche-lifestyle.webp'
import ContactUs from './Images/contact-us.webp'
import ShoppingToolsCard from './ShoppingToolsCard/ShoppingToolsCard'

const shoppingToolsList = [
    {
        id: 0,
        name: 'Compare',
        image: Compare,
        width: 2
    },
    {
        id: 1,
        name: 'Locate a dealer',
        image: LocateADealer,
        width: 1
    },
    {
        id: 2,
        name: 'Porsche Lifestyle',
        image: PorscheLifestyle,
        width: 1
    },
    {
        id: 3,
        name: 'Contact Us',
        image: ContactUs,
        width: 1
    },
]

const ShoppingTools = () => {
  return (
    <div className='container-center'>
        <div className='shopping-tools'>
            <p className='shopping-tools-header'>Shopping Tools</p>
            <div className='shopping-tools-item-wrapper'>
                {shoppingToolsList.map((item) => <ShoppingToolsCard size={item.width} key={item.id} image={item.image} name={item.name} link={item.link}/>)}
            </div>
        </div>
    </div>
  )
}

export default ShoppingTools