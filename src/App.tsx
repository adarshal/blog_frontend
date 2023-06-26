import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/auth/Auth";
import Blog from "./components/blogs/Blog";
import Header from "./components/header/Header";
import Footer from "./components/home/Footer";
import Homepage from "./components/home/Homepage";
import {Routes,Route, } from "react-router-dom"
import {useEffect, } from "react"
import { authActions } from "./store/auth-slice";
import Profile from "./components/header/user/Profile";
import AddBlog from "./components/blogs/AddBlog";
import ViewBlog from "./components/blogs/ViewBlog";
import {Toaster} from "react-hot-toast"
import UpdateBlog from "./components/blogs/UpdateBlog";
function App() {
  const isLoggedIn=useSelector((state:any)=>state.isLoggedIn);
  console.log(isLoggedIn)
  const dispatch=useDispatch();
  useEffect(()=>{
    const data:string=localStorage.getItem("userData") as string;
    if(JSON.parse(data)!=null){
      dispatch(authActions.login())
    }
  },[])
  return (
    <div className="wrapper">
      <Toaster />
      <header>
        <Header />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
          <Route path="/blog/view/:id" element={<ViewBlog />}></Route>
          <Route path="/blog/update/:id" element={<UpdateBlog />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
