import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const HomePage=()=> {
    const {state} = useLocation()
    const [user, setUser] = useState([])
    useEffect(()=> {
        const fetchData=async()=> {
            const res = await axios.get("http://localhost:3001/api/users")
            const data = res.data
            setUser(data)
        
        }
        if(state) {
            const updatedData=[...user, state];
            setUser(updatedData)
        }
        fetchData()

    },[state])

    
    
    return (
        <div>
            <h1>List USers</h1>
            <ul>
                
                {user.map((item) => 
                    <li key={item.id} style={{listStyle:"none"}}>
                        <Link to={`/user/${item.id}`}>{item.name}</Link>
                    </li>
                )}
                <Link to="/user/add">Create</Link>
            </ul>
            
        </div>
    )
}
export default HomePage;


// ========================================================   TUTORIAL CODEGYM ========================================

// import React, { Component } from "react";

// import axios from "axios";

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3001/api/users")
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       });
//   }

//   handleCreate = () => {
//     window.location.href = "/user/add";
//   };

//   render() {
//     const { users } = this.state;
//     return (
//       <div>
//         <h1>Users</h1>
//         {users.map(user => (
//           <div key={user.id}>
//             <a href={`/user/${user.id}`}> {user.name} </a>
//           </div>
//         ))}
//         <button type="button" onClick={this.handleCreate}>
//           Create
//         </button>
//       </div>
//     );
//   }
// }

// export default HomePage;




