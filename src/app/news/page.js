'use client';
import React, { useEffect, useState } from 'react'
import Masonry from '../components/Masonry';

function chunkArray(array, chunkSize) {
  console.log(array)
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

function News() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchNewsCutouts = async () => {
      const response = await fetch('/api/news/cutouts');
      const data = await response.json();
      const imagePaths = data.map((image) => image.path);
      setPictures(imagePaths);
    }
    fetchNewsCutouts();
  },[])


  return (
    <div className='lg:p-20 lg:pt-12'>
      <div className=''>
        <h1 className='text-center text-2xl lg:text-3xl text-gray-700 p-4 lg:pb-12 font-bold'>News Articles</h1>
        <Masonry images={pictures}/>
      </div>
    </div>
  )
}

export default News