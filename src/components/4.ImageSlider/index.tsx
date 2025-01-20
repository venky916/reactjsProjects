import React, { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'

interface Props{
    url: string,
    page: string,
    limit:string
}

interface ImageItem {
  id: string;
  download_url:string;
}

const ImageSlider:React.FC<Props> = ({ url,page="1", limit="5" }) => {
  const [images, setImages] = useState<Array<ImageItem>>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchImages(getUrl:string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error: any) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrev() {
    setCurrentSlide( currentSlide === 0 ? images.length -1 : currentSlide-1)
  }

  function handleNext() {
    setCurrentSlide( currentSlide === images.length-1 ? 0: currentSlide+1 )
  }

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url,page,limit]);
    
    console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred ! {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={ handlePrev} />
      {images &&
        images.length ?
        images.map((imgItem: ImageItem,index:number) => (
          <img
            key={imgItem?.id}
            src={imgItem?.download_url}
            alt="images"
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
          />
        )):null}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicator">
        {images &&
          images.length ?
          images.map((_, index: number) => (
            <button key={index} className={currentSlide === index ?"current-indicator" :"current-indicator inactive-indicator"} onClick={()=>setCurrentSlide(index)}></button>
          )) : null}
      </span>
    </div>
  );
};

export default ImageSlider;
