import Navbar from "./components/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext)
  console.log("app page", currentUser);


  const style = {
    app: "h-[100vh]"
  }
  return (
    <div className={style.app}>
      <Navbar profileName={currentUser?.email} profileImg={currentUser?.photoURL} />
      <button className="border bg-red-400 hover:bg-blue-400 p-2 rounded duration-500"
        onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}

export default App;
