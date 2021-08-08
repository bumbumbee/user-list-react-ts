import React from 'react';
import styles from './TableHeader.module.scss'

const TableHeader = () => {

    return (
        <div className={styles.Header}>
            <div className={styles.HeaderCell}>ID</div>
            <div className={styles.HeaderCell}>Full name</div>
            <div className={styles.HeaderCell}>Email</div>
        </div>
    );
};

export default TableHeader;
