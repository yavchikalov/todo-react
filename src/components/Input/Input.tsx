import { IInputProps } from "./Input.props";
import styles from './Input.module.css';
import classnames from 'classnames';

const Input = ({ className, ...props }: IInputProps): JSX.Element => {
    return (
        <input
            type="text"
            className={classnames(styles.input, className)}
            {...props}
        />
    );
}

export default Input;