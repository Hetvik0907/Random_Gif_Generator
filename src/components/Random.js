import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';



//acces api in env file
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const [gif, setGif] = useState('');
    const [loading,setLoading]=useState('false');
    

        async function fetchData() {
            setLoading(true);
            const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            //not use fetch use axios
            //only data fetch
           const {data}= await axios.get(url);
            const imageSource = data.data.images.downsized_large.url;
            console.log(imageSource)
            setGif(imageSource)
            setLoading(false)
        }
     useEffect(()=>{
fetchData()
     },[])

    function CllickHandler() {
      fetchData()
    }

    return (
        <div className='flex w-1/2  flex-col
         bg-green-500 mt-10 rounded-3xl border border-black items-center gap-y-5'>
            <h1 className='text-2xl uppercase underline font-bold py-5 mt-[15px]'> A Random Gif</h1>
         
         {
            loading ? (<Spinner/>):
            (  <img src={gif} width='450' />)
         }

          
          
            <button
            className='w-10/12 text-xl py-2 rounded-lg bg-yellow-400 uppercase font-bold mb-[20px]  '
                onClick={CllickHandler}
            >Generate</button>
        </div>
    )
}

export default Random