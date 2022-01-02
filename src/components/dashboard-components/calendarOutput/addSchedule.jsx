import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function clickDate (){

}

let events = 
    [{ title: "today's event", date: new Date() }];


const AddSchedule = () => {
    return (
        <Card>
        <CardBody>
            <div className="d-flex align-items-center">
                <div>
                    <CardTitle>레이드 달력</CardTitle>
                    <CardSubtitle>2022년 레이드 일정 조율</CardSubtitle>
                </div>
                <div className="ml-auto d-flex align-items-center">
                    일정 추가 중 
                </div>

            </div>
            <Row>
                <Col lg="12">
                    <div className="mainCal calendar" style={{ height: '70vh'}}>
                        <div className="cal-wrapper" style={{ width: '50%', height:500 }}> 
                          <FullCalendar 
                            plugins={[ dayGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            height="auto"
                            navLinks="true"
                            // dateClick={function(date, jsEvent){
                            //     console.log('day', date.toISOString());

                            selectable='true'
                            selectAllow={}
                            events={events}
                            />
                           {/* <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} /> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </CardBody>
    </Card>
    );
}

export default AddSchedule;