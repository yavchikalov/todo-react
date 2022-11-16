import { ITodoItem } from "../../interfaces/TodoItem";

export enum FILTERS_TYPES {
    ALL,
    NOT_DONE
}

export type FilterActions = { type: FILTERS_TYPES, payload: ITodoItem[] };

export interface IFilterReducerState {
    todoList: ITodoItem[],
    filter: FILTERS_TYPES
}

export const filterReducer = (state: IFilterReducerState, action: FilterActions): IFilterReducerState => {
    switch (action.type) {
        case FILTERS_TYPES.ALL:
            return {
                filter: FILTERS_TYPES.ALL,
                todoList: action.payload
            };
        case FILTERS_TYPES.NOT_DONE:
            return {
                filter: FILTERS_TYPES.NOT_DONE,
                todoList: action.payload.filter((item) => !item.isDone)
            };
        default:
            throw new Error('Неверный тип фильтрации');
    }
}

export const FILTERS = [
    { name: 'Все', type: FILTERS_TYPES.ALL },
    { name: 'Незавершенные', type: FILTERS_TYPES.NOT_DONE }
];