import { useContext } from "react"
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  const { currentUser } = useContext(AuthContext)
  // console.log("app page", currentUser);
  const style = {
    app: "h-[100vh]"
  }
  return (
    <div className={style.app}>
      <Navbar profileName={currentUser?.email} profileImg={currentUser?.photoURL} />

      <Main />

    </div>
  );
}

export default App;
