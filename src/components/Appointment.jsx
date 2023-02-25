import React from 'react';
import '../index.css';
import {  InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { ScheduleComponent, Inject, Agenda, Day, Month, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
class App extends React.Component {
  render() {
    return (
      <div className="w-full">
      <ScheduleComponent currentView='Day' eventSettings={{ dataSource: this.remoteData }} selectedDate={new Date(2023, 1, 1)} height= {650} enableInfiniteScrolling= {true} > 
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, InfiniteScroll]} />
      </ScheduleComponent>  
      </div>
    );
  }
}
   

export default App;