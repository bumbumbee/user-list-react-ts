import React from 'react';
import {UserType} from 'components/MainTable';
import styles from './TableRow.module.scss'

interface User {
    user: UserType
}

const TableRow: React.FC<User> = ({user}) => {
    const {id, firstName, lastName, email} = user;

    return (
        <div className={styles.TableRow} data-background={(id % 2 === 0 ? 'dark' : '')}>
            <div className={styles.TableCell}>{id}</div>
            <div className={styles.TableCell}>{firstName} {lastName}</div>
            <div className={styles.TableCell}>{email}</div>
        </div>
    );
};

export default TableRow;
