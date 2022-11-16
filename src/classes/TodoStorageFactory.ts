import { ITodoClass } from "../interfaces/Todo.class";
import { TodoFactory } from "./TodoFactory";
import { TodoStorage } from "./TodoStorage";

export class TodoStorageFactory extends TodoFactory {
    createInstance(): ITodoClass {
        return new TodoStorage('todolist');
    }
}