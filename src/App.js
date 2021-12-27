import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css'; //App이라고 하는 컴포넌트에 해당하는 css
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

class App extends Component {
  // props에 들어가는 값들을 초기화
  // App이라는 컴포넌트가 실행될때 render라고 하는 함수보다 먼저 실행되어 초기화 시켜주는 코드 = constructor
  constructor(props){
    // constructor 함수에서는 값을 직접 변경해도 상관 없지만, render함수에서는 setState 함수를 꼭 사용해야한다.(아니면 리액트가 모름)
    super(props);
    // state를 초기화
    this.state = {

    }
  } 
 render() {

    return(
     <div className="App">
  
        <h1>일정등록 완료</h1>
        아래와 같이 일정 등록이 완료되었습니다.

        <h2>적용된 날짜</h2>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        />

        <h2>상세</h2>
        -- 시간표 --
       
     </div>
   )
 } 
}
export default App;
