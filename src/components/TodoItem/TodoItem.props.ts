import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITodoItem } from "../../interfaces/TodoItem";

export interface ITodoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
    value: boolean;
    createdAt: number;
    onIsDone(value: boolean): void;
    onSaveText(value: string): void;
    onDelete(): void;
}