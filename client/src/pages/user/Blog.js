import { Header } from '../../components/Header';
import React, { useEffect, useState, useContext } from 'react';
import { ReactSession } from 'react-client-session';
import { UserContext } from '../../context/Auth';
import { getItem, addItem, removeItem } from '../../services/LocalStorage';

export function Blog() {
    const [user, setUser] = useState(JSON.parse(getItem("user")));
    const [backendData, setBackendData] = useState({});


    useEffect(() => {
        fetch("/" + user.login).then(
            response => response,
        ).then(
            data => {
                setBackendData(data);
            },
        )
    }, [])

    console.log(backendData);
    return (
        <div>
            <Header />
            {(user === null) ? (
                <p>Hello </p>
            ) : (
                <p>Hello {user.login} !!!</p>

            )
            }
        </div>
    )
}