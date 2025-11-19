import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';


function Button({children , className, ...props}: ButtonProps) {
	// let text= 'Сохранить';

	return (
		<button className={cn(styles['button'], styles['accent'], className)} {...props}>{children}</button>
	);

}

export default Button;
