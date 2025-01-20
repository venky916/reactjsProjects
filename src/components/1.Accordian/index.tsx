import { useState } from 'react';
import data from './data.ts';
import './styles.css';

const Accordian = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<Array<string>>([]);

  const handleSingleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId: string) => {
    // Make a copy of the current multiple array
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      // Add the item if it’s not already in the list
      cpyMultiple.push(getCurrentId);
    } else {
      // Remove the item if it’s already in the list
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    // Update the state with the new array
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  !enableMultiSelection
                    ? () => handleSingleSelection(dataItem.id)
                    : () => handleMultiSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
};

export default Accordian;
