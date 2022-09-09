import Navbar from "./components/Navbar";

function App() {
  const style = {
    app: "h-[100vh]"
  }
  return (
    <div className={style.app}>
      <Navbar />
    </div>
  );
}

export default App;
