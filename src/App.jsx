import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'



const App = () => {
  const [userdata, setuserdata] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=40`)
    setuserdata(response.data)

  }
  useEffect(() => {
    getdata()
  }, [currentPage]) //dependency array me currentPage ko daal diya taki jab bhi currentPage change ho to getdata function call ho jaye aur data fetch ho jaye





  let printuserdata = <h3 className='text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading....</h3>
  if (userdata.length > 0) {
    printuserdata = userdata.map((user, idx) => (
      <div key={idx}>
        <a href={user.url} target='_blank' rel='noopener noreferrer'>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={user.download_url} alt="" />
          </div>
          <h2>{user.author}</h2>
        </a>
      </div>
    ))
  }
  return (
    <div className='bg-black h-screen p-4 text-white flex flex-col'>
      <h1 className='text-2xl font-bold text-center mb-4'>
        <div className='bg-gray-700 text-3xl w-10 h-10 text-amber-200 rounded-2xl'>{currentPage}
        </div> Image Gallery
      </h1>
      <div className='relative flex-1 min-h-0 overflow-y-auto flex flex-wrap content-start gap-3'>
        {printuserdata}
      </div>
      <div className='shrink-0 flex justify-center items-center p-4 gap-3 '>
        <button onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
          setuserdata([])
        }}
          className='text-sm cursor-pointer px-4 py-3 gap-3 mt-4 bg-amber-400'>prev</button>
        <button onClick={() => {
          setCurrentPage(currentPage + 1);
          setuserdata([])
        }}
          className='text-sm cursor-pointer px-4 py-3 gap-3 mt-4 bg-amber-400'>next</button>
      </div>
    </div>
  )
}

export default App