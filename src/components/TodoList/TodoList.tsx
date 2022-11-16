import React, { useEffect, useReducer, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { ITodoListProps } from "./TodoList.props";
import styles from './TodoList.module.css';
import { ITodoItem } from "../../interfaces/TodoItem";
import Input from "../Input/Input";
import Button from "../Button/Button";
import classnames from 'classnames';
import { filterReducer, FILTERS_TYPES, FILTERS } from "./filter";


const TodoList = ({ list = [], onAddItem, onUpdateItem, onDeleteItem, ...props }: ITodoListProps): JSX.Element => {
    // state
    const [todo, setTodo] = useState<string>('');
    const [{ todoList, filter }, dispatchFilter] = useReducer(filterReducer, { todoList: list, filter: FILTERS_TYPES.ALL });

    // effects
    useEffect(() => {
        dispatchFilter({ type: filter, payload: list });
    }, [list, filter]);

    // handlers
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (onAddItem && todo) {
            onAddItem(todo);
            setTodo('');
        }
    }

    const handleIsDone = (item: ITodoItem, value: boolean) => {
        onUpdateItem && onUpdateItem({ ...item, isDone: value });
    }

    const handleSaveText = (item: ITodoItem, text: string) => {
        onUpdateItem && onUpdateItem({ ...item, text });
    }

    const handleDelete = (id: string) => {
        onDeleteItem && onDeleteItem(id);
    }

    const handleClickFilter = (type: FILTERS_TYPES) => {
        if (filter !== type) dispatchFilter({ type, payload: list });
    }

    return (
        <>
            <div className={styles.create}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Input
                        value={todo}
                        placeholder="Введите текст"
                        className={styles.input}
                        onChange={handleChangeInput}
                    />
                    <Button type="submit">Создать</Button>
                </form>
            </div>
            <div className={styles.filter}>
                {
                    FILTERS.map((item) => (
                        <div
                            key={item.type}
                            className={classnames(styles.filterItem, {
                                [styles.filterItemActive]: filter === item.type
                            })}
                            onClick={() => handleClickFilter(item.type)}
                        >
                            {item.name}
                        </div>
                    ))
                }
            </div>
            {
                !todoList.length
                    ? (
                        <div className={styles.noItems}>Добби свободен!</div>
                    )
                    : (
                        todoList.map((item) => (
                            <TodoItem
                                layout
                                key={item.id}
                                text={item.text}
                                createdAt={item.createdAt}
                                value={item.isDone}
                                onIsDone={(value) => handleIsDone(item, value)}
                                onSaveText={(value) => handleSaveText(item, value)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        ))
                    )
            }
        </>
    )
}

export default TodoList;