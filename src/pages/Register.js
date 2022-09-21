import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

function Register() {
    const navigate = useNavigate()
    const style = {
        register: "bg-grey-lighter min-h-screen flex flex-col bg_img bg-center bg-cover",
        register_child: "container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",
        register_container: "bg-white px-6 py-8 rounded shadow-md text-black w-full",
        signuph1: "mb-8 text-3xl text-center",
        input: "block border border-grey-light w-full p-3 rounded mb-4",
        inputwrap: "h-[50px]  relative rounded-md  w-full bg-blue-400",
        inputfile: "w-full h-full opacity-0 cursor-pointer bg-none",
        inputh1: "absolute top-3 text-xl left-[20px] text-white z-10",
        btn: "w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1 border hover:bg-red-300 border-black",
        footer_link: "no-underline border-b border-grey-dark text-grey-dark ml-3",
        footer_login: "text-grey-dark mt-6 text-black"

    }
    const registerFunc = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
        console.log(file);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
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
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            name: displayName,
                            email: email,
                            id: res.user.uid,
                            photoURL: downloadURL

                        });
                        navigate("/")
                    });
                }
            );

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <div className={style.register}>
                <div className={style.register_child}>
                    <form onSubmit={registerFunc} className={style.register_container}>
                        <h1 className={style.signuph1}>Sign in</h1>
                        <input
                            type="text"
                            className={style.input}
                            name="username"
                            placeholder="Username" />
                        <input
                            type="text"
                            className={style.input}
                            name="email"
                            placeholder="Email" />
                        <input
                            type="password"
                            className={style.input}
                            name="password"
                            placeholder="Password" />
                        <input
                            type="file"
                            className={style.input}
                        />
                        <button
                            type="submit"
                            className={style.btn}
                        >Register</button>

                        <div className={style.footer_login}>
                            Already have an account?
                            <Link className={style.footer_link} to="/login">
                                Login
                            </Link>.
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register