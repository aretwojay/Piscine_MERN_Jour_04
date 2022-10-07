import { Header } from '../components/Header';
import React, { useEffect, useState } from 'react'; 

export function Home() {

    const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/register").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  console.log(backendData);


    return (
        <div>
            <Header />
               {(typeof backendData.user === 'undefined') ? (
        <p>Hello</p>
      ) : (
        <p>Hello {backendData.user.login}</p>

      )
      }
        </div>
    )
}