import { ITodoItem } from "./TodoItem";

export interface ITodoClass {
    getList(): ITodoItem[];
    updateItem(item: ITodoItem): void;
    daleteItem(id: string): void;
    add(text: string): void;
}