
import './App.css';
import Navbar from './Component/Navbar';
//import Home from './Component/Home';
import About from './Component/About';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Users from './Component/Users';
import Search from './Component/Search';
import UserDetail from './Component/UserDetail';


function App() {
const[users,setUsers]=useState([]);
const [user,setUser]=useState({});
const [repos,setRepos]=useState([]);
const[showClear,setShowClear]=useState(false);
  // useEffect(async()=>{
  //    const res=await axios.get('https://api.github.com/users');
  //    setUsers(res.data);
  // },[])

  const searchName =async(name)=>{
      const res=await axios.get(`https://api.github.com/search/users?q=${name}`);
      setUsers(res.data.items)
      setShowClear(!showClear)
    }

    const clearUsers=()=>{
      setUsers([])
    }

    const getDetails=async(login)=>{
     const res= await axios.get(`https://api.github.com/users/${login}`)
    setUser(res.data)
    }
    
    const getRepo=async(username)=>{
      const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc`);
      setRepos(res.data)
    }
  return (
    <Router>
    <Navbar />
    <div className='container'>
    <Switch>
    <Route exact path='/' render={props=>(
      <>
      <Search searchName={searchName} showClear={users.length>0? true:false} clearUsers={clearUsers}/>
     <Users users={users}/>
     </>
    )
    }>

    </Route>
    
    <Route exact path='/about' component={About}/>
    <Route exact path='/user/:anything' render={
      props=>(
        <UserDetail getDetails={getDetails} user={user} {...props} getRepo={getRepo} repos={repos}/>
      )
      }
      />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
