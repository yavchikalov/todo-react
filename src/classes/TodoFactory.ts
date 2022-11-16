import { ITodoClass } from "../interfaces/Todo.class";

export abstract class TodoFactory {
    abstract createInstance(): ITodoClass;
}