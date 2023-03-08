import { Route } from 'react-router-dom';
// // import ButtonAppBar from './components/Appbar';
import GetValues from './components/HotelGet';
import PostValues from './components/HotelPost';
import UpdateValues from './components/HotelPut';
import { Routes } from 'react-router-dom';
import HomePage from './components/mainpage';
import Remove from './components/HotelDel';
// import About from './components/card';
function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Get" element={< GetValues/>}/>
            <Route path="/Post" element={<PostValues/>}/>
            <Route path="/Update" element={<UpdateValues/>}/>
            <Route path="/HotelDel" element={<Remove/>}/>
      </Routes>
      {/* <About/> */}
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
