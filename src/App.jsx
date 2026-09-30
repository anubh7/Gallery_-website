import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Card from './components/card'
import Button from './components/buttons'


const App = () => {
  const [userdata, setuserdata] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=30`)
    setuserdata(response.data)

  }

  useEffect(() => {
    getdata()
  }, [currentPage]) //dependency array me currentPage ko daal diya taki jab bhi currentPage change ho to getdata function call ho jaye aur data fetch ho jaye
  
  let printuserdata = <h3 className='text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading....</h3>
  if (userdata.length > 0) {
    printuserdata = userdata.map((user, idx) => (
      <div key={idx}>
        <Card user={user} /> {/*user={user} means we are passing the user object as a prop to the Card component. So, inside the Card component, we can access the user object using props.user*/}
      </div>
    ))
  }
  return (
    <div className='bg-black h-screen p-4 text-white flex flex-col'>
      <h1 className='text-2xl font-bold text-center mb-4'>
         Image Gallery
      </h1>
      <div className='relative flex-1 min-h-0 overflow-y-auto flex flex-wrap content-start gap-3'>
        {printuserdata}
      </div>
      <Button
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setuserdata={setuserdata}
      />
      
    </div>
  )
}

export default App