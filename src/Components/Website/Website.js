import React, { useState ,useEffect} from 'react'
import BasicExample from '../Home/Home'
import axios from 'axios'

const Website = ({handleClick}) => {
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            console.log("ressss", res);
            const data = res.data.products;
            setData(data)
        })
            .catch((error) => console.log(error));
    }, [])

    return (
        <>
            <div className='gridDiv'>
                {data.slice(0,28).map((item) => (
                    <BasicExample key={item.id} item={item}  handleClick={handleClick} />
                ))}
            </div>
        </>
    )
}

export default Website