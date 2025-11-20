import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';


function Button({children , className, appearence='small', ...props}: ButtonProps) {
	// let text= 'Сохранить';

	return (
		<button className={cn(styles['button'], styles['accent'], className, {
			[styles['small']]: appearence === 'small',
			[styles['small']]: appearence === 'big',
		})} {...props}>{children}</button>
	);

}

export default Button;
