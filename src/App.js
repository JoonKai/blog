/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  let [글제목,글제목변경] =  useState(['남자 코트 추천','과자 맛집','오뎅 맛집']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [pushtitle, setPushtitle] = useState(0);
  let [inputValue, setInputValue] = useState('');
  let posts = '강남 고기 맛집'

  // function 반복된UI(){
  //   var 어레이 =[];
  //   for (let i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕</div>)
  //   }
  //   return 어레이
  // }
  function 제목바꾸기(){
    var newArray = [...글제목]; /*딥카피 :  모든 카피는 왼쪽처럼...*/ 
    newArray[0] = '여자 코트 추천' 
    글제목변경(newArray);
  }
  let toggleModal = ()=>{setModal(prev => !prev)};

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      {/* {반복된UI()} */}
      {
        글제목.map(function(a, i){
          return (
          <div className='list' key={i}>
            <h3 onClick={()=>{setPushtitle(i)}}>{a}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
            <p>2월 19일 발행</p>
            <hr/>
          </div>) /*배열.map()*/
        })
      }
      <div className='publish'>
        <input onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button onClick={()=>{
          var arrayCopy = [...글제목]
          arrayCopy.unshift(inputValue); 
          글제목변경(arrayCopy)
        }}>저장</button>
      </div>
      <Profile/>
      <button onClick={()=>{setModal(!modal)}}>열고닫기</button>
      {
        modal ===true
        ?<Modal 글제목={글제목} pushtitle={pushtitle}></Modal>
        :null
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h2>{props.글제목[props.pushtitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = {name: 'Kim', age:30}
  }
  changeName(){
    this.setState({name: 'Park'})
  }
  render(){
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    )
  }
}















export default App;
