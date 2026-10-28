import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
  const api = 'https://test-swagger-2ph6.onrender.com/products'
  const [data, setData] = useState([])
  let token = localStorage.getItem('token')

  async function get() {
    try {
      let {data} = await axios.get(api,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setData(data.data)
    } catch (error) {
      console.error('Prpble with get-product'); 
    }
  }

  useEffect(()=>{
    get()
  },[])
  return (
    <div>
      <input type="search" className='border ml-[210px] px-1' />
       <table className="border border-black w-[80%] text-center mt-[50px] m-auto">
      <tbody>
        {data.map((el) => (
          <tr >
            <td className="border border-black">{el.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Product