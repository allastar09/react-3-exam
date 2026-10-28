import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate()
  const api = 'https://test-swagger-2ph6.onrender.com/users'
  const [data, setData] = useState([])
  const apiCatalog = 'https://test-swagger-2ph6.onrender.com/catalogs'
  const [dataCatalog, setDataCatalog] = useState([])

  async function get() {
    try {
      const token = localStorage.getItem('token')

      console.log('My token', token)

      let {data} = await axios.get(api,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })

      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

   async function getCatalog() {
      try {

        let {data} = await axios.get(apiCatalog)

        setDataCatalog(data)
      } catch (error) {
        console.error("Problew with getCatalog");
        
      }
    }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/Course', { replace: true })
      return
    }
    get()
    getCatalog() 
  }, [navigate])


  return (
  <div className='ml-[350px]'>
    <h1 className='text-[25px]'>Users</h1>
    <table className="border border-black w-[80%] text-center mt-[2 0px]">
      <tbody>
        {data.map((el) => (
          <tr >
            <td className="border border-black">{el.name}</td>
          </tr>
        ))}
      </tbody>
    </table>

      <h1 className='text-[25px] mt-[100px]'>Catalogs</h1>
    <table className="border border-black w-[80%] text-center mt-[20px] ">
      <tbody>
        {dataCatalog.map((el) => (
          <tr >
            <td className="border border-black">{el.slug}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}

export default About