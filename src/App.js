import './App.css';
import Test from './pages/Test';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import yonamImg from './asset/yonamLogo.PNG';
import Header from './pages/Header';
import Article from './pages/Article';
import Nav from './pages/Nav';
import { useState } from 'react';
import Box from './component1/Box';
import Clock from './component1/Clock';
import Comment from './component1/Comment';
import CommentList from './component1/CommentList';
import Navbar from './component/Navbar';
import MainPage from './pages/MainPage';
import Week1 from './component/Week1';
import Week2 from './component/Week2';
import Week3 from './component/Week3';
import Week4 from './component/Week4';
import Week5 from './component/Week5';
import Week6 from './component/Week6';
import Week7 from './component/Week7';

// function Header() {
//   return (
//     <>
//     <header>
//       <h1><a href='/'>WEB</a></h1>
//     </header>
//     </>
//   );
// }

// function Nav() {
//   return (
//     <>
//     <nav>
//     <ol>
//       <li><a href='/rr/1'/>HTML</li>
//       <li><a href='/rr/2'/>CSS</li>
//       <li><a href='/rr/3'/>JAVASCRIPT</li>
//     </ol>
//     </nav>
//     </>
//   );
// }

// function Article() {
//   return(
//     <>
//       <article>
//         <h2>환영!</h2>
//         Hello WEB programming
//       </article>
//     </>
//   );
// }

function App(props) {

  // let po = "소프트웨어학과"

  // function ff() {
  //   return 'LG 연암학원'
  // }

  function sayHello() {
    return '안녕';
  }

  

  let n = 0;
  const [n2, setCnt] = useState(0);
  const cnt = () => {
    n=n+1;
    // console.log('카운트 : ',n);
    setCnt(n2+1);
    // console.log('state 카운트', n2);
  }

const [cnt2, setCnt2] = useState(0);
const cc = () => {
  setCnt2(cnt2+1);
  document.title=cnt2;  // 브라우저 제목
  console.log("카운트..." , cnt2);
}

  return (
    <div className="App-body">
      {/* <Routes>
         <Route exact={true} path='/' element={<Test />}/>
      </Routes> */}
      {/* <h1 className='header1'>연암공과대학교</h1>
      <h3 className='test1'>{po}</h3>
      <h4> {ff()} </h4>
      <img src={yonamImg}/> */}

      {/* <Header />
      <Nav />
      <hr />
      <p>{n} state:{n2}</p>
      <button onClick={cnt}>클릭!</button>

      <Box name="1st"/>
      <Box name="2nd"/>
      <Box name="3rd"/>
      <hr />

      <div> 3주차 2 </div>
      <button onClick={cc}>클릭</button>
      <p>{cnt2}번 클릭했습니다.</p>
      <Box name="AI개론(1)"/>
      <Box name="React(2)"/>
      <Box name="HTML(3)"/>
      <hr />
      <p> 4주차 </p>
      <Clock />
      <CommentList />
      <hr />
      <Article /> */}
      <Navbar />
      <Routes>
          <Route exact={true} path='/' element={<MainPage />}/>
          <Route path='/Week1' element={<Week1 />}/>
          <Route path='/Week2' element={<Week2 />}/>
          <Route path='/Week3' element={<Week3 />}/>
          <Route path='/Week4' element={<Week4 />}/>
          <Route path='/Week5' element={<Week5 />}/>
          <Route path='/Week6' element={<Week6 />}/>
          <Route path='/Week7' element={<Week7 />}/>
      </Routes>

    </div>
  );
}

export default App;
