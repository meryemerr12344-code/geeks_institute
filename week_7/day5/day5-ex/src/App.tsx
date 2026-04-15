import ErrorBoundary from './Components/ErrorBoundary'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import PostList from './Components/PostList'
import SocialMedias from './Components/SocialMedias'
import Skills from './Components/Skills'
import Experiences from './Components/Experiences'

function Home() {
  return <h1>Home</h1>
}

function Profile() {
  return <h1>Profile Screen</h1>
} 
function Shop() {
  throw new Error("Shop crashed!");
 return <h1>Shop Screen</h1>
}

const postData = async () => {
  const response = await fetch("https://webhook.site/e55f9935-4931-458a-86c6-2c678e255010", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27
    })
  });

  console.log(response);
};

function App() {

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-blue bg-blue">
        <div className="navbar-nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </div>
      </nav>
<Routes>
  <Route path="/" element={
    <ErrorBoundary><Home /></ErrorBoundary>} />
  <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />
  <Route path="/shop" element={
    <ErrorBoundary>
      <Shop />
    </ErrorBoundary>
  } />
</Routes>
<PostList />
<SocialMedias />
      <Skills/>
      <Experiences/>

      <button className='border ' onClick={postData}>Post Data</button>
    </>
  )

}

export default App
