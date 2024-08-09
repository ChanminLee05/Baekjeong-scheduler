import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import {Employees} from "../../entities/Employees";
import {formatDay, getDate, isHoliday} from "../../features/TimeController";
import {days} from "../../entities/Date";
import {generateCells} from "../../features/CellGenerater";
import {getFullTimeEmployeeName, getEmployeeNamesForSchedule} from "../../features/FullTimeEmpController";
import {useEditName} from "../../features/EditName";

interface ScheduleProps {
    startDate: string | null;
    fullTimeEmployees: Employees[];
    partTimeEmployees: Employees[];
}

const Schedule: React.FC<ScheduleProps> = ({ startDate, fullTimeEmployees, partTimeEmployees }) => {

    const dates = startDate ? getDate(startDate) : [];

    const manager = getFullTimeEmployeeName(fullTimeEmployees, "WILL");
    const hyobin = getFullTimeEmployeeName(fullTimeEmployees,"HYOBIN");
    const yunseon = getFullTimeEmployeeName(fullTimeEmployees,"YUNSEON");

    const [employeeNames, setEmployeeNames] = useState<[string, string]>(['', '']);

    useEffect(() => {
        const [firstEmployee, secondEmployee] = getEmployeeNamesForSchedule();
        setEmployeeNames([firstEmployee, secondEmployee]);
    }, []);

    const [data, setData] = useState<{ [key: number]: string[] }>({});
    const [isEditing, setIsEditing] = useState<{ rowIndex: number; cellIndex: number } | null>(null);

    const { editName } = useEditName({ data, setData, isEditing, setIsEditing });


    return (
        <div className="schedule-table-page">
            <table id="schedule-table">
                <tbody>
                <tr className="head-row">
                    <th></th>
                    <th></th>
                    <th></th>
                    {days.map((day, index) => (
                        <th key={index}>{day}</th>
                    ))}
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    {dates && dates.map((date, index) => (
                        <td key={index} style={{ color: isHoliday(date) ? 'red' : 'black'}}>
                            {formatDay(date)}
                        </td>
                    ))}
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    {generateCells({
                        rowIndex: 1,
                        startCellIndex: 1,
                        endCellIndex: 4,
                        text: manager?.name || '',
                        editName,
                        isEditing
                    })}
                    <td className="schedule editable">OFF</td>
                    <td className="schedule editable">{manager?.name}</td>
                    <td className="schedule editable">OFF</td>
                </tr>
                <tr>
                    <td></td>
                    <td>FULL TIME</td>
                    <td className="time-slot">{hyobin?.name}</td>
                    <td className="schedule">11:00-8:00</td>
                    <td className="schedule">OFF</td>
                    <td className="schedule">OFF</td>
                    <td className="schedule">3:30-STAY</td>
                    <td className="schedule">3:30-STAY</td>
                    <td className="schedule">3:30-LC</td>
                    <td className="schedule">11:00-8:00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>FULL TIME</td>
                    <td className="time-slot">{yunseon?.name}</td>
                    <td className="schedule">11:00-CUT</td>
                    <td className="schedule">3:30-STAY</td>
                    <td className="schedule">OFF</td>
                    <td className="schedule">OFF</td>
                    <td className="schedule">3:30-STAY</td>
                    <td className="schedule">3:30-CUT</td>
                    <td className="schedule">11:00-CUT</td>
                </tr>
                <tr>
                    <th rowSpan={6}>Lunch</th>
                    <td className="side">A</td>
                    <td>11:00-3:30</td>
                    <td className="schedule editable">{employeeNames[0]}</td>
                    {generateCells({
                        rowIndex: 2,
                        startCellIndex: 2,
                        endCellIndex: 6,
                        text: '',
                        editName,
                        isEditing
                    })}
                    <td className="schedule editable">{employeeNames[1]}</td>
                </tr>
                <tr>
                    <td className="side">B</td>
                    <td>11:00-3:30</td>
                    <td className="schedule editable">Emp</td>
                    {generateCells({
                        rowIndex: 3,
                        startCellIndex: 2,
                        endCellIndex: 6,
                        text: '',
                        editName,
                        isEditing
                    })}
                    <td className="schedule editable">Emp</td>
                </tr>
                <tr>
                    <td className="side">BAR</td>
                    <td>11:00-3:30</td>
                    <td className="schedule editable">{employeeNames[1]}</td>
                    {generateCells({
                        rowIndex: 4,
                        startCellIndex: 2,
                        endCellIndex: 6,
                        text: '',
                        editName,
                        isEditing
                    })}
                    <td className="schedule editable">{employeeNames[0]}</td>
                </tr>
                <tr>
                    <td className="side">A</td>
                    <td>12:30-4:30</td>
                    {generateCells({
                        rowIndex: 5,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">B</td>
                    <td>12:30-4:30</td>
                    {generateCells({
                        rowIndex: 6,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">BAR</td>
                    <td>12:30-4:30</td>
                    {generateCells({
                        rowIndex: 7,
                        startCellIndex: 1,
                        endCellIndex: 1,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr className="row-break">
                    <td colSpan={days.length + 3}></td>
                </tr>
                {/*dinner*/}
                <tr>
                    <th rowSpan={11}>Dinner</th>
                    <td className="side">A</td>
                    <td>3:30-1st CUT</td>
                    <td className="schedule editable">{employeeNames[0]}</td>
                    {generateCells({
                        rowIndex: 8,
                        startCellIndex: 2,
                        endCellIndex: 6,
                        text: '',
                        editName,
                        isEditing
                    })}
                    <td className="schedule editable">{employeeNames[1]}</td>
                </tr>
                <tr>
                    <td className="side">B</td>
                    <td>3:30-1st CUT</td>
                    {generateCells({
                        rowIndex: 9,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">BAR</td>
                    <td>3:30-1st CUT</td>
                    <td className="schedule editable">{employeeNames[1]}</td>
                    {generateCells({
                        rowIndex: 10,
                        startCellIndex: 2,
                        endCellIndex: 6,
                        text: '',
                        editName,
                        isEditing
                    })}
                    <td className="schedule editable">{employeeNames[0]}</td>
                </tr>
                <tr>
                    <td className="side">A</td>
                    <td>4:30-2nd CUT</td>
                    {generateCells({
                        rowIndex: 11,
                        startCellIndex: 1,
                        endCellIndex: 1,
                        text: '',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 11,
                        startCellIndex: 2,
                        endCellIndex: 4,
                        text: 'X',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 11,
                        startCellIndex: 5,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">B</td>
                    <td>4:30-2nd CUT</td>
                    {generateCells({
                        rowIndex: 12,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">BAR</td>
                    <td>4:30-2nd CUT</td>
                    {generateCells({
                        rowIndex: 13,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">A</td>
                    <td>5:30-STAY</td>
                    {generateCells({
                        rowIndex: 14,
                        startCellIndex: 1,
                        endCellIndex: 4,
                        text: '',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 14,
                        startCellIndex: 5,
                        endCellIndex: 5,
                        text: 'X',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 14,
                        startCellIndex: 6,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">B</td>
                    <td>5:30-STAY</td>
                    {generateCells({
                        rowIndex: 15,
                        startCellIndex: 1,
                        endCellIndex: 1,
                        text: '',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 15,
                        startCellIndex: 2,
                        endCellIndex: 5,
                        text: 'X',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 15,
                        startCellIndex: 6,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">BAR</td>
                    <td>5:30-STAY</td>
                    {generateCells({
                        rowIndex: 16,
                        startCellIndex: 1,
                        endCellIndex: 1,
                        text: '',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 16,
                        startCellIndex: 2,
                        endCellIndex: 5,
                        text: 'X',
                        editName,
                        isEditing
                    })}
                    {generateCells({
                        rowIndex: 16,
                        startCellIndex: 6,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr className="row-break">
                    <td colSpan={days.length + 2}></td>
                </tr>
                <tr>
                    <td className="side">HOST</td>
                    <td>4:00-LC</td>
                    {generateCells({
                        rowIndex: 17,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="row-break" colSpan={10}></td>
                </tr>
                {/*Training*/}
                <tr>
                    <th rowSpan={3}>TRAINEE</th>
                    <td className="side">SERVER</td>
                    <td>3:30-STAY</td>
                    {generateCells({
                        rowIndex: 20,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">HOST</td>
                    <td>4:00-LC</td>
                    {generateCells({
                        rowIndex: 21,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                <tr>
                    <td className="side">BAR</td>
                    <td>3:30-STAY</td>
                    {generateCells({
                        rowIndex: 22,
                        startCellIndex: 1,
                        endCellIndex: 7,
                        text: '',
                        editName,
                        isEditing
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
