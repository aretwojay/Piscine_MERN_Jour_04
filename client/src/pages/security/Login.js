import { Header } from '../../components/Header';
import React, { useEffect, useState } from 'react';

export function Login() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/login").then(
            response => response.json(),
        ).then(
            data => {
                setBackendData(data);
            },
        )
    }, [])

    return (
        <div>
            <Header />
            {(typeof backendData.errors == 'undefined') ? (
                <p></p>
            ) : (
                backendData.errors.map((error, i) => (
                    <div className="alert alert-danger" key={i}>{error}</div>
                )))
            }
            <form action="/login" method="POST">
                <input className="form-control" type="text" name="login" placeholder="login" />
                <input className="form-control" type="password" name="password" placeholder="password" />

                <input className="btn btn-dark" type="submit" value="Login" />
            </form>
        </div>
    )
}

// import '../App.css';
// import { Route, Link } from "react-router-dom";

// function App() {


//   return (
//     <div className="App">
//       {(typeof backendData.users === 'undefined') ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.users.map((user, i) => (
//           <p key={i}>{user}</p>
//         ) )
//       )
//       }
//     </div>
//   );

// }

// export default App;
