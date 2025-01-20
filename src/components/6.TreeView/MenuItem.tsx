import React, { useState } from 'react';
import { item } from '.';
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa'
import './styles.css';

const MenuItem: React.FC<{ item: item }> = ({ item }) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState<any>({});
    function handleToggle(getCurrentLabel: string) {
        // setDisplayCurrentChildren({
        //   ...displayCurrentChildren,
        //   [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
        // });

// better
        setDisplayCurrentChildren((prevState:any) => ({
            ...prevState,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        }))
    }
    console.log(displayCurrentChildren,item.label)
  return (
    <li >
      <div className='menu-item'>
        <p>{item?.label}</p>
        {item && item?.children && item?.children.length && (
          <span onClick={() => handleToggle(item?.label)}>
            {displayCurrentChildren[item?.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        )}
      </div>

      {item &&
      item?.children &&
      item?.children.length > 0 &&
      displayCurrentChildren[item?.label] ? (
        <MenuList key={item?.label} list={item?.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
