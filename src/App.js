import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  let snss = [
    {img: './assets/i-instagram.svg'},
    {img: './assets/i-facebook.svg'},
    {img: './assets/i-youtube.svg'},
    {img: './assets/i-blog.svg'},
  ]
  let infos=[
    {txt: '회사소개'},
    {txt: '인재채용'},
    {txt: '이용약관'},
    {txt: '개인정보처리방침'},
    {txt: '위치정보 이용약관'},
    {txt: '차량손해면책제도'},
    {txt: '고객센터'},
    {txt: '제휴문의'}
  ]
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer snss={snss} infos={infos}/>
    </div>
  );
}

export default App;