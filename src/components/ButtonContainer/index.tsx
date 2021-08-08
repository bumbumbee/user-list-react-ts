import React from 'react';
import styles from './ButtonContainer.module.scss'

interface ButtonProps {
    onUserFilter: (even?: boolean) => void // function requires argument; does not return anything
}

const ButtonContainer: React.FC<ButtonProps> = ({onUserFilter}) => {

    return (
        <div className={styles.Container}>
            <button
                className={styles.Button}
                onClick={() => onUserFilter(true)}>
                Even
            </button>
            <button
                className={styles.Button}
                onClick={() => onUserFilter(false)}>
                Odd
            </button>
            <button
                className={styles.Button}
                onClick={() => onUserFilter()}>
                Reset
            </button>
        </div>
    );
};

export default ButtonContainer;
