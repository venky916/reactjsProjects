import React, { useEffect, useState } from 'react'
import './style.css'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const LoadMoreButton = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Array<any>>([]);
    const [count, setCount] = useState<number>(0);
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const [disableBtn,setDisableBtn] = useState<boolean>(false)
    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count == 0 ? 0 : count * 20}`);
            const result:ProductsResponse = await response.json();
            console.log(result);
            if (result && result?.products && result?.products.length) {
                setProducts((prevProducts)=>[...prevProducts,...result?.products]);
            }
        } catch (e: any) {
            setErrMsg(e?.message) 
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableBtn(true)
        }
    },[products])
    

    if (loading) return <div>Loading Data...!</div>
    if(errMsg) return <div>SomeThing has gone wrong..!</div>
  return (
    <div className="load-more-container">
      <div className="products-container">
        {products && products.length
          ? products.map((item: Product) => (
              <div key={item?.id} className="product">
                <img src={item.thumbnail} alt={item?.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
              <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load More Products</button>
              {
                  disableBtn && <p>You have reach max of 100 products</p>
              }
      </div>
    </div>
  );
}

export default LoadMoreButton