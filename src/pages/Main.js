import React, { useState, useEffect } from 'react'
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"

import Product from '../components/Product';
function Main() {
    const [data, setData] = useState([])
    // console.log(data);
    const sortedData = data.sort((a, b) => new Date(b.data.date.seconds) - new Date(a.data.date.seconds))
    // console.log(sortedData);
    // console.log(data[0]?.date.seconds);
    const style = {
        main: "w-4/5 h-full m-auto grid grid-cols-3",
    }

    useEffect(() => {
        const getData = async () => {
            const box = []
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => box.push({ id: doc.id, data: doc.data() }));
            setData(box)
        }
        return () => {
            getData()
        }
    }, [])
    return (
        <div className={style.main}>
            {
                sortedData.map(product => (
                    <Product product={product} key={product.id} />
                ))
            }
        </div>
    )
}

export default Main