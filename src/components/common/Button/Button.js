import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

// 전달받은 className, onCLick 등 값들이 rest안에 들어 있다. 
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default'
})=> {
    // to 값이 존재하면 Link를 사용하고, 그렇지 않으면 div를 사용한다. 
    // 비활성화 되어 있는 버튼일 때도 div를 사용한다. 
    const Element = (to && !disabled) ? Link : Div;

    //비활성화하면 onClick은 실행되지 않습니다.
    //disabled값이 true가 되면 className에 disabled를 추가합니다.  
    return (
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled? () => null: onClick}>
            {children}
        </Element>
    )
}
export default Button;