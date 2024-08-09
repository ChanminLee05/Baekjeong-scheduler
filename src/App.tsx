import React, {useState} from 'react';
import './App.css';
import {Employees, partTimeEmployeeSchedule, fullTimeEmployeeSchedule} from "./entities/Employees";
import Checkbox from "./pages/Checkbox/Checkbox";
import Schedule from "./pages/ScheduleTable/Schedule";

function App() {
  const [startDate, setStartDate] = useState<string | null>("N/A");
  const [fullTimeEmployees, setFullTimeEmployees] = useState(fullTimeEmployeeSchedule);
  const [partTimeEmployees, setPartTimeEmployees] = useState(partTimeEmployeeSchedule);

    const handleEmployeeAvailabilityChange = (updatedFullTimeEmployees: Employees[], updatedPartTimeEmployees: Employees[]) => {
        setFullTimeEmployees(updatedFullTimeEmployees);
        setPartTimeEmployees(updatedPartTimeEmployees);
    };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  }


  return (
    <div className="main-page">
        <h1>Baekjeong Scheduler</h1>
        <Checkbox fullTimeEmployees={fullTimeEmployees} partTimeEmployees={partTimeEmployees} onAvailabilityChange={handleEmployeeAvailabilityChange}/>
        <p>Select Start Date</p>
        <input type="date" id="date-input" onChange={handleDate}/>
        <Schedule startDate={startDate} fullTimeEmployees={fullTimeEmployees} partTimeEmployees={partTimeEmployees} />
    </div>
  );
}

export default App;
