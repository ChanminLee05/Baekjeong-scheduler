export interface Employees {
    name: string;
    availableDay: string[];
    availableShift: string[];
    availablePosition: string[];
    maxShifts: number;
}

export const fullTimeEmployeeSchedule: Employees[] = [
    { name: "WILL", availableDay: ["SUN", "MON", "TUE", "WED", "FRI"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition: ["Manager", "HOST"], maxShifts: 2},
    { name: "HYOBIN", availableDay: ["SUN", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 5},
    { name: "YUNSEON", availableDay: ["SUN", "MON", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 5},
]
export const partTimeEmployeeSchedule: Employees[] =[
    { name: "LEO", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 3},
    { name: "NAEUN", availableDay: ["SUN", "MON", "TUE", "THU", "FRI"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 3},
    { name: "CHANMIN", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 4},
    { name: "KEVIN", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 3},
    { name: "JUDE", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 3},
    { name: "CHAEA", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 3},
    { name: "AMANDA", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 1},
    { name: "KITTY", availableDay: ["MON", "FRI"], availableShift: ["3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2},
    { name: "EUNVIN", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 3},
    { name: "JUHEON", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 3},
    { name: "SIMON", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 3},
    { name: "DAVID", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2},
    { name: "EDDIE", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:00-LC", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR", "HOST"], maxShifts: 2},
    { name: "ANGELINA", availableDay: ["MON", "TUE", "WED", "THU"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2},
    { name: "GRACE", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2},
    { name: "YOONSUNG", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2},
    { name: "HAN", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2},
    { name: "GAON", availableDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], availableShift: ["11:00-3:30", "12:30-4:30", "3:30-1st CUT", "4:30-2nd CUT", "5:30-STAY"], availablePosition : ["A", "B", "BAR"], maxShifts: 2}
]
