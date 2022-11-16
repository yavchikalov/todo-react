import styles from './Checkbox.module.css';
import { ICheckboxProps } from './Checkbox.props';
import classnames from 'classnames';

const Checkbox = ({ value, onSetValue, ...props }: ICheckboxProps): JSX.Element => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSetValue(event.target.checked);
    }

    return (
        <label
            className={classnames(styles.label, {
                [styles.labelActive]: value
            })}
            {...props}
        >
            <input
                checked={value}
                type="checkbox"
                className={styles.input}
                onChange={handleChange}
            />
            <div className={styles.box}></div>
        </label>
    )
}

export default Checkbox;