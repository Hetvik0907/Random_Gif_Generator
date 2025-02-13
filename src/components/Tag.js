import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';




//acces api in env file
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
 
    const [tag,setTag]=useState('');
    const [gif, setGif] = useState('');
    const [loading,setLoading]=useState('false');
    

        async function fetchData() {
            //write first tag then call api
            if (!tag.trim()) {
                alert("Please enter a tag to search!");
                return;
            }

            setLoading(true);

            try {
                const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=10`;
                const { data } = await axios.get(url);
                console.log("API Response:", data);
                // Check if the API returned any results
                if (data.data.length === 0) {
                    alert("No GIFs found for the given tag. Try a different tag!");
                    setGif('');
                } else {
                    const randomIndex = Math.floor(Math.random() * data.data.length);
                    const imageSource = data.data[randomIndex].images.downsized_large.url;
                    setGif(imageSource);
                }
            } catch (error) {
                console.error("Error fetching data from Giphy API:", error);
                alert("Failed to fetch GIF. Please check your network or API key.");
            } finally {
                setLoading(false);
            }
        }



    

    function ClickHandler() {
      fetchData()
    }
    function ChangHandler(event) {
     setTag(event.target.value);
    
    
    }

    return (
        <div className='flex w-1/2  flex-col
         bg-blue-500 mt-10 rounded-3xl border border-black items-center gap-y-5'>
            <h1 className='text-2xl uppercase underline font-bold py-5 mt-[15px]'> Random {tag} Gif</h1>
         
         {
            loading ? (<Spinner/>):
            (   <img src={gif} width='450' />)
         }

          
          <input
          className='w-10/12 text-xl py-2 rounded-lg
           bg-slate-300 uppercase font-bold mb-[3px] text-center '
         onChange={ChangHandler}
         value={tag}
         placeholder='Enter Tag'
         />

            <button
            className='w-10/12 text-xl py-2 rounded-lg bg-yellow-500 uppercase font-bold mb-[20px]  '
                onClick={ClickHandler}
            >Generate</button>
        </div>
    )
}

export default Tag