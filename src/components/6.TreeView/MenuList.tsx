import React from 'react'
import MenuItem from './MenuItem'
import { item } from './index'
import './styles.css'

const MenuList:React.FC<{list:item[]}> = ({list =[]}) => {
  return (
      <ul className='menu-list-container'>
          {list && list.length && list.map((listItem: item) => <MenuItem key={ listItem.label} item={ listItem} />)}
    </ul>
  )
}

export default MenuList