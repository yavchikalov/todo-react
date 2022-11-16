export interface ITodoItem {
    readonly id: string;
    text: string;
    readonly createdAt: number;
    isDone: boolean;
}