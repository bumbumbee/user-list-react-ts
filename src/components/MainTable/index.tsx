import React, {useState, useEffect} from 'react';
import styles from './MainTable.module.scss'
import axios from 'axios';
import {TableHeader, TableRow, ButtonContainer} from 'components'

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export type UserType = User;

const MainTable = () => {
    const [users, setUserList] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>('https://api.jsonbin.io/b/610fe00ef098011544ad7f0e')
            .then((response) => {
                setUserList(response.data);
            });
    }, []);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const onUserFilter = (even?: boolean) => {
        even ? setFilteredUsers(users.filter(user => user.id % 2 === 0)) :
            even === false ? setFilteredUsers(users.filter(user => user.id % 2 !== 0)) :
                setFilteredUsers(users);
    };

    return (
        <>
            <ButtonContainer onUserFilter={onUserFilter}/>
            <div className={styles.Table}>
                <TableHeader/>
                {filteredUsers.map(user => <TableRow key={user.id} user={user}/>)}
            </div>
            {filteredUsers.length === 0 && <div className={styles.Loader}/>}
        </>
    );
};

export default MainTable;
