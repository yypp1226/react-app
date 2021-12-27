import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index.jsx';
// react-router-dom SPA앱을 만들때 많이 사용되는 웹용 패키지
// BrowserRoute : historyAPI를 사용하여 URL과 UI를 동기화하는 라우터
// Route : 컴포넌트와 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링
// Link : 'a'태그와 비슷, to 속성에 설정된 위치로 이동한다. 기록이 history스택에 저장된다.
// Switch: 자식 컴포넌트 Route 또는 Redirect중 매치되는 첫 번째 요소를 렌더링, Switch를 사용하면 BrowserRoute만 사용할 때와 다르게 하나의 매칭되는 요소만 렌더링 한다.
//         사용하지 않을 경우 매칭되는 모두를 렌더링한다.
import {  Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

import './assets/scss/style.css';

// ReactDOM.render(컴포넌트, 조합 대상 요소)
ReactDOM.render(
  <HashRouter>
  
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  
  </HashRouter>
  ,document.getElementById('root')); 
