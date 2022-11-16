import { ITodoClass } from "../interfaces/Todo.class";
import { ITodoItem } from "../interfaces/TodoItem";

export class TodoStorage implements ITodoClass {
    private key: string = '';

    constructor(key: string) {
        this.key = key;
    }

    getList(): ITodoItem[] | [] {
        const result = localStorage.getItem(this.key);

        return result ? JSON.parse(result) : [];
    }

    add(text: string): void {
        if (!localStorage || !this.key) return;

        const item: ITodoItem = {
            createdAt: Date.now(),
            id: Math.random().toString(16).substring(2, 10),
            text,
            isDone: false
        }

        const items = this.getList();
        localStorage.setItem(this.key, JSON.stringify([...items, item]));
    }

    updateItem(item: ITodoItem): void {
        if (!localStorage || !this.key) return;

        const items = this.getList();
        const itemIndex = items.findIndex((el) => el.id === item.id);

        if (!~itemIndex) return;

        items.splice(itemIndex, 1, item);

        localStorage.setItem(this.key, JSON.stringify(items));
    }

    daleteItem(id: string): void {
        if (!localStorage || !this.key) return;

        const items = this.getList();
        const itemIndex = items.findIndex((el) => el.id === id);

        if (!~itemIndex) return;

        items.splice(itemIndex, 1);

        localStorage.setItem(this.key, JSON.stringify(items));
    }
}