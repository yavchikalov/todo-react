import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITodoItem } from "../../interfaces/TodoItem";

export interface ITodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list?: ITodoItem[],
    onAddItem?(text: string): void;
    onUpdateItem?(item: ITodoItem): void;
    onDeleteItem?(id: string): void;
}