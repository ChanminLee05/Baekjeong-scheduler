import {Employees, fullTimeEmployeeSchedule} from "../entities/Employees";
export const getFullTimeEmployeeName = (fullTimeEmployees: Employees[], name: string) => {
    return fullTimeEmployees.find(fullTimeEmployee => fullTimeEmployee.name === name);
}

const getRandomEmployee = (excludeEmployee: Employees | null = null): Employees => {
    const availableEmployees = fullTimeEmployeeSchedule.filter(emp => emp !== excludeEmployee && emp.name !== "WILL");
    return availableEmployees[Math.floor(Math.random() * availableEmployees.length)];
}

export const getEmployeeNamesForSchedule = (): [string, string] => {
    const firstEmployee = getRandomEmployee();
    const secondEmployee = getRandomEmployee(firstEmployee);

    return [firstEmployee.name, secondEmployee.name];
}
