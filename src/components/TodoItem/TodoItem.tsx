import styles from './TodoItem.module.css';
import Checkbox from "../Checkbox/Checkbox";
import { ITodoItemProps } from "./TodoItem.props";
import React, { ForwardedRef, forwardRef, useMemo, useState } from 'react';
import classnames from 'classnames';
import TrashIcon from './icons/trash.svg';
import EditIcon from './icons/edit.svg';
import CheckIcon from './icons/check.svg';
import Input from '../Input/Input';
import { motion } from 'framer-motion';

const TodoItem = motion(forwardRef(({ value = false, text, onIsDone, onSaveText, onDelete, createdAt, ...props }: ITodoItemProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [currentText, setCurrentText] = useState<string>(text);

    const handleSetValue = (value: boolean) => {
        onIsDone(value);
    }

    const date = useMemo(() => {
        return new Date(createdAt).toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }, [createdAt]);

    const time = useMemo(() => {
        return new Date(createdAt).toLocaleTimeString('ru-RU');
    }, [createdAt]);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(event.target.value);
    }

    const handleSaveText = () => {
        onSaveText(currentText);
        setIsEdit(false);
    }

    const handleDelete = () => {
        onDelete();
    }

    return (
        <div
            ref={ref}
            className={classnames(styles.todoItem, {
                [styles.todoItemDone]: value,
                [styles.todoItemEdit]: isEdit
            })}
            {...props}
        >
            <Checkbox value={value} onSetValue={handleSetValue} />
            {
                !isEdit
                    ? (
                        <>
                            <span>{text}</span>
                            <img
                                width="16px"
                                height="16px"
                                src={EditIcon}
                                alt="Редактировать"
                                className={`${styles.action} ${styles.edit}`}
                                onClick={() => setIsEdit(true)}
                            />
                            <img
                                width="16px"
                                height="16px"
                                src={TrashIcon}
                                alt="Удалить"
                                className={styles.action}
                                onClick={handleDelete}
                            />
                        </>
                    )
                    : (
                        <>
                            <Input
                                value={currentText}
                                onChange={handleChangeText}
                            />
                            <img
                                width="16px"
                                height="16px"
                                src={CheckIcon}
                                alt="Сохранить"
                                className={styles.action}
                                onClick={handleSaveText}
                            />
                        </>
                    )
            }
            <div className={styles.created}>Дата создания: {date} - {time}</div>
        </div>
    );
}));

export default TodoItem;