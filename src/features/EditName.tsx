import React, {useState} from "react";

interface EditNameProps {
    data: { [key: number]: string[] };
    setData: React.Dispatch<React.SetStateAction<{ [key: number]: string[] }>>;
    isEditing: { rowIndex: number; cellIndex: number } | null;
    setIsEditing: React.Dispatch<React.SetStateAction<{ rowIndex: number; cellIndex: number } | null>>;
}
export const useEditName = ({data, setData, isEditing, setIsEditing}: EditNameProps) => {
    const [cellValue, setCellValue] = useState<string>('');

    const handleEditClick = (rowIndex: number, cellIndex: number, value: string) => {
        setIsEditing({ rowIndex, cellIndex });
        setCellValue(value || '');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCellValue(e.target.value);
    }

    const handleBlur = () => {
        if (isEditing) {
            const { rowIndex, cellIndex } = isEditing;
            setData(prevData => {
                const newData = { ...prevData };
                if (!newData[rowIndex]) newData[rowIndex] = [];
                newData[rowIndex][cellIndex] = cellValue;
                return newData;
            });
        }
        setIsEditing(null);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleBlur();
        }
    }

    const editName = (rowIndex: number, cellIndex: number, value: string) => {
        const currentValue = data[rowIndex]?.[cellIndex] ?? value;

        if (isEditing && isEditing.rowIndex === rowIndex && isEditing.cellIndex === cellIndex) {
            return (
                <input
                    type="text"
                    value={cellValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus={true}
                />
            );
        }

        return (
            <div onClick={() => handleEditClick(rowIndex, cellIndex, currentValue)}>
                {currentValue.toUpperCase() || '\u200B'}
            </div>
        )
    }

    return { editName };
}