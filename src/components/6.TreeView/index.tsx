import React from 'react'
import MenuList from './MenuList'
import './styles.css'

export interface item {
  label: string;
  to: string;
  children?: item[]; // `children` is optional because not all items have children
}


interface Props{
    menus : item[]
}

const TreeView:React.FC<Props> = ({menus = []}) => {
  return (
      <div className='tree-view-container'>
         <MenuList list={menus} />
    </div>
  )
}

export default TreeView