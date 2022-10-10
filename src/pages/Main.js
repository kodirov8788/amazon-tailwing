import React, { useState, useEffect } from 'react'
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
import axios from "axios"

import Product from '../components/Product';
function Main() {
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState("")
    const [filteredData, setFilteredData] = useState([])
    // console.log(inputData)
    // const sortedData = data.sort((a, b) => new Date(b.data.date.seconds) - new Date(a.data.date.seconds))
    // console.log("sorteddata:", sortedData)
    const style = {
        main: "w-4/5 h-full m-auto grid grid-cols-1",
    }

    // useEffect(() => {
    //     const getData = async () => {
    //         const box = []
    //         const querySnapshot = await getDocs(collection(db, "products"));
    //         querySnapshot.forEach((doc) => box.push({ id: doc.id, data: doc.data() }));
    //         setData(box)
    //     }
    //     return () => {
    //         getData()
    //     }
    // }, [])


    useEffect(() => {
        const getData = async () => {
            axios.get("https://api.escuelajs.co/api/v1/products")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        getData()
    }, [])


    useEffect(() => {
        const filteredData = () => {
            const filteredData = data.filter(({ category }) => category.name.toLowerCase()
                .includes(inputData.toLowerCase().trim()))
            setFilteredData(filteredData)
        }
        filteredData()

    }, [inputData])

    // console.log("filteredData:", filteredData)

    return (
        <div className={style.main}>
            {/* {
                sortedData.map(product => (
                    <Product product={product} key={product.id} />
                ))
            } */}
            <input type="text" placeholder='search ....'
                onChange={(e) => setInputData(e.target.value)}
                className='border-black border-2 p-2 text-[20px] w-full' />

            {
                filteredData.length === 0 ? data.map(product => {
                    return (
                        <div className="flex border-black border-2">
                            <h1 className='w-2/5 mx-1'>{product.title}</h1>
                            <h2 className=''>{product.category.name}</h2>
                        </div>
                    )
                }) : filteredData?.map(product => {
                    return (
                        <div className="flex border-black border-2">
                            <h1 className='w-2/5 mx-1'>{product.title}</h1>
                            <h2 className=''>{product.category.name}</h2>
                        </div>
                    )
                })


            }
            <h1>sadasdasdasdsa</h1>
        </div>
    )
}

export default Main