import React from "react";

interface GenerateCellsProps {
    rowIndex: number;
    startCellIndex: number;
    endCellIndex: number;
    text: string;
    editName: (rowIndex: number, cellIndex: number, value: string) => React.ReactNode;
    isEditing: { rowIndex: number; cellIndex: number } | null;
}
export const generateCells = ({
    rowIndex,
    startCellIndex,
    endCellIndex,
    text,
    editName,
    isEditing
}: GenerateCellsProps) => {
    return Array.from({ length: endCellIndex - startCellIndex + 1 }, (_, i) => {
        const cellIndex = startCellIndex + i;
        return (
            <td key={cellIndex} className="schedule editable">
                {editName(rowIndex, cellIndex, text)}
            </td>
        )
    });
}