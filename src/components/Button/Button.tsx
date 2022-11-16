import { IButtomProps } from "./Button.props";
import styles from './Button.module.css';

const Button = ({ children, ...props }: IButtomProps): JSX.Element => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;