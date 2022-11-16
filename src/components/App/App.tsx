import styles from './App.module.css';
import Time from '../Time/Time';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';
import { TodoStorageFactory } from '../../classes/TodoStorageFactory';
import { ITodoItem } from '../../interfaces/TodoItem';

const storage = new TodoStorageFactory().createInstance();

function App(): JSX.Element {
    const [todoList, setTodoList] = useState<ITodoItem[]>(storage.getList());

    const handleAddItem = (text: string) => {
        storage.add(text);
        setTodoList(storage.getList());
    }

    const handleUpdateItem = (item: ITodoItem) => {
        storage.updateItem(item);
        setTodoList(storage.getList());
    }

    const handleDeleteItem = (id: string) => {
        storage.daleteItem(id);
        setTodoList(storage.getList());
    }

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <header className={styles.header}>
                    TODO
                </header>
                <section className={styles.list}>
                    <TodoList
                        list={todoList}
                        onAddItem={handleAddItem}
                        onUpdateItem={handleUpdateItem}
                        onDeleteItem={handleDeleteItem}
                    />
                </section>
                <footer>
                    <Time className={styles.time} />
                </footer>
            </div>
        </div>
    );
}

export default App;
