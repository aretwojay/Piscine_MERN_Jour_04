import { Header } from '../../components/Header';
import React, { useEffect, useState } from 'react'; 

export function Register() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/register").then(
            response => response.json(),
        ).then(
            data => {
            setBackendData(data);
            },
        )
    }, [])
    console.log(backendData)

  return (
    <div>
        <Header />
            {(typeof backendData.errors === 'undefined') ? (
                <p></p>
            ) : (
                backendData.errors.map((error, i) => (
                <div className="alert alert-danger" key={i}>{error}</div>
                ) )
            )
            }

        <form action="/register" method="POST">
            <input className="form-control" type="text" name="login" placeholder="login" />
            <input className="form-control" type="text" name="email" placeholder="email" />
            <input className="form-control" type="password" name="password" placeholder="password" />
            <input className="form-control" type="password" name="confirm-password" placeholder="confirm-password" />

            <input className="btn btn-dark" type="submit" value="Register" />
        </form>
    </div>
    )
}

// import '../App.css';
// import React, { useEffect, useState } from 'react';  
// import { Route, Link } from "react-router-dom";

// function App() {

//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/register").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data);
//         console.log(data);
//       }
//     )
//   }, [])

//   return (
//     <div classNameName="App">
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
