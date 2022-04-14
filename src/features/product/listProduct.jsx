import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ListProduct() {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetchDataAsync()
  }, [])


  const fetchDataAsync = async () => {
    axios.get('https://localhost:5001/api/product')
      .then(function (response) {
        setProductData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  return (
    <div>
      {
        productData && productData.map(x => (
          <p>{x.id} - {x.name}</p>
        ))
      }
    </div>
  )
}