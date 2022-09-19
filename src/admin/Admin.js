import React from 'react'
import { useNavigate } from 'react-router-dom'
import { storage, db } from "../firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

function Admin() {
    const navigate = useNavigate()
    const UploadFunc = async (e) => {
        e.preventDefault()
        const productName = e.target[0].value
        const productPrice = e.target[1].value
        const productColor = e.target[2].value
        const productImg = e.target[3].files[0]
        const productWeight = e.target[4].value
        const productSale = e.target[5].value
        console.log(productName, productPrice, productColor, productImg, productWeight, productSale);
        try {

            const storageRef = ref(storage, productName);
            const uploadTask = uploadBytesResumable(storageRef, productImg);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await addDoc(collection(db, "products"), {
                            productName: productName,
                            productPrice: Number(productPrice),
                            productColor: productColor,
                            productImage: downloadURL,
                            productWeight: Number(productWeight),
                            productSale: Number(productSale)
                        });
                        navigate("/")
                    });
                }
            );

        } catch (error) {
            console.log(error)
        }

    }

    const style = {
        admin: "w-full h-screen bg-blue-100 flex items-center justify-center",
        form: "w-3/5 h-4/5 border-black border-[2px] flex flex-col p-[20px]",
        inputs: "h-[60px] mb-[20px] indent-[20px]",
        btn: "border-black border-[2px] w-fit px-4 py-2 text-blue-500 hover:bg-red-300 duration-300 hover:text-black rounded"
    }

    return (
        <div className={style.admin}>
            <form onSubmit={UploadFunc} className={style.form}>
                <input className={style.inputs} type="text" placeholder='Product Name' />
                <input className={style.inputs} type="number" placeholder='Product Price' />
                <input className={style.inputs} type="text" placeholder='Product Color' />
                <input className={style.inputs} type="file" placeholder='Product Image' />
                <input className={style.inputs} type="number" placeholder='Product Weight' />
                <input className={style.inputs} type="number" placeholder='Product Sale' />
                <button className={style.btn}>Upload</button>
            </form>
        </div >
    )
}

export default Admin