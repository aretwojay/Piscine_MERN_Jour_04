import { Header } from '../components/Header';
import React, { useEffect, useState, useContext } from 'react'; 
import { ReactSession } from 'react-client-session';
import { UserContext } from '../context/Auth';
import { getItem, addItem, removeItem } from '../services/LocalStorage';

export function Home() {
  const [backendData, setBackendData] = useState({});


    useEffect(() => {
      fetch("/login").then(
          response => response.json(),
      ).then(
          data => {
          setBackendData(data);
          },
      )
  }, [])

    console.log(backendData);
    if (Object.keys(backendData) == "user") {
      addItem("user", JSON.stringify(backendData.user));
    }

    const [user, setUser] = useState(JSON.parse(getItem("user")));

    return (
        <div>
            <Header />
               {(user === null) ? (
        <p>Hello </p>
      ) : (
        <p>Hello {user.login}</p>

      )
      }
        </div>
    )
}