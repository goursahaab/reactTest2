

import React, { useEffect, useState } from 'react';
import axios from "../utils/axios"

const Gallery = () => {
      const [images, setImages] = useState();
  const getImages = async()=>{
    try {

        const photo = await axios.get('products')
        console.log(photo.data)

        setImages(photo.data)
      } catch (error) {
       console.error(error)
       
      }
  }

  useEffect(()=>{
    getImages();
  },[]);
  return (
    <div>
    
      {images && images.map((image, index) => (
        <img key={index} src={image.image} alt={image.title} />
      ))}
    </div>
  );
}

export default Gallery;
