import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
function Login() {
    const navigate = useNavigate()
    const style = {
        register: "bg-grey-lighter min-h-screen flex flex-col bg_imglogin bg-cover bg-center",
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

    const LoginFunc = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <div>
            <div className={style.register}>
                <div className={style.register_child}>
                    <form onSubmit={LoginFunc} className={style.register_container}>
                        <h1 className={style.signuph1}>Sign in</h1>
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
                        <button
                            type="submit"
                            className={style.btn}
                        >Login</button>
                        <div className={style.footer_login}>
                            Already have an account?
                            <Link className={style.footer_link} to="/register">
                                Register
                            </Link>.
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default Login