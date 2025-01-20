import { useEffect, useState } from 'react'


const useLocalStorage= (key:string, defaultValue:string) => {

    function getCurrentValue() {
      let currentValue;

      try {
        currentValue = JSON.parse(
          localStorage.getItem(key) || String(defaultValue),
        );
      } catch (error) {
        console.log(error);
        currentValue = defaultValue;
      }

      return currentValue;
    }

    const [value, setValue] = useState(getCurrentValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    
    return [value,setValue]   
}

export default useLocalStorage