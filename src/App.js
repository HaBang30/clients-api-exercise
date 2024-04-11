// // ======================= [Thực hành] Lấy danh sách User bằng Axios(REACT HOOK) ============================

// // import React, {useEffect, useState} from "react";

// // import axios from "axios";

// // const App=()=> {
// //   const [user, setUser]=useState([]);
// //   useEffect(()=> {
// //     const fetchData = async()=> {
// //       try{
// //         const res = await axios.get("http://localhost:3001/api/users")
// //         const data = await res.data
// //         setUser(data)
// //         console.log(user)

// //       } catch(error) {
// //         console.error("Error fetch data", error)
// //       }
// //     }
// //     fetchData();

// //   },[])
// //   return (
// //     <div>
// //       <h1>This is data fro user</h1>
// //       {user.map((item)=> 
// //         <ul key={item.id}>
// //           <li style={{listStyle:"none"}}>{item.id} - {item.name}</li>
// //         </ul>
// //       )}
// //     </div>
// //   )

  
// // }
// // export default App;


// //=========================== [Thực hành] Lấy danh sách User bằng Axios(CLASS COMPONENT)==============

// // import React ,{Component} from "react";

// // import axios from "axios";

// // class App extends Component{
// //   constructor(props){
// //     super(props);
// //     this.state={
// //       user: [],
// //     }
// //   }
// //   componentDidMount(){
// //     const {user} = this.state
// //     const fetchData= async()=> {
// //       try{
// //         const res = await axios.get("http://localhost:3001/api/users")
// //         const data = await res.data
// //         this.setState({user: data})
// //         console.log(user)
// //       } catch (error) {
// //         console.error("Fetch data error", error)
// //       }

// //     }
// //     fetchData();

// //   }
// //   render(){
// //     const {user} = this.state
// //     return (
// //       <div>
// //         <h1>This is data from user !!!!!</h1>
// //         {user.map((item)=> 
// //           <ul key={item.id}>
// //             <li>{item.id} - {item.name}</li>
// //           </ul>
// //         )}
// //       </div>
// //     )
// //   }
// // }
// // export default App;

// //================================= [Thực hành] Lấy danh sách User bằng Axios(CLASS COMPONENT) ===================

// // import React ,{Component} from "react";

// // import axios from "axios";

// // class App extends Component{
// //   constructor(props){
// //     super(props);
// //     this.state={
// //       user: [],
// //     }
// //   }
// //   componentDidMount(){
// //     const {user} = this.state
// //     axios.get ("http://localhost:3001/api/users")
// //     .then(res=> {
// //       this.setState({user: res.data})
// //       console.log(user)
// //     })
// //     .catch(error=>{
// //       console.error("Fetch data error", error)
// //     })

// //   }
// //   render(){
// //     const {user} = this.state
// //     return (
// //       <div>
// //         <h1>This is data from user ????</h1>
// //         {user.map((item)=> 
// //           <ul key={item.id}>
// //             <li style={{listStyle:"none"}}>{item.id} - {item.name}</li>
// //           </ul>
// //         )}
// //       </div>
// //     )
// //   }
// // }
// // export default App;




//  =============================  [Thực hành] Tạo và chỉnh sửa User thông qua call API bằng Axios =====================

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddUser from "./AddUser";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";
import React from "react";

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/user/:id" element={<ItemPage/>}/>
        <Route path="/user/add" element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

//  ==================== [Thực hành] Tạo và chỉnh sửa User thông qua call API bằng Axios (CODEGYM)==============
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import HomePage from './HomePage'
// import ItemPage from "./ItemPage";
// import React from "react";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path={"/user/add"} element={<ItemPage />} />
//         <Route path={`/user/:userId`} element={<ItemPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

























// // ====================================== GET IT BY CHAT GPT ===============================


// // import { Link, Route, Routes } from 'react-router-dom';

// // import ItemPage from './ItemPage';
// // import React from 'react';

// // const items = [
// //   { id: 1, name: 'Item 1' },
// //   { id: 2, name: 'Item 2' },
// //   { id: 3, name: 'Item 3' }
// // ];

// // function App() {
// //   return (
// //       <div>
// //         <h1>Items List</h1>
// //         <nav>
// //           <ul>
// //             {items.map(item => (
// //               <li key={item.id}>
// //                 <Link to={`/item/${item.id}`}>{item.name}</Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //         <hr />
// //         <Routes>
// //           <Route path="/item/:id" component={ItemPage} />
// //         </Routes>
// //       </div>
    
// //   );
// // }

// // export default App;


//=============================== GET IT FROM CHAT GPT ======================

// import React, { useState } from 'react';

// function App() {
//   const [selectedDate, setSelectedDate] = useState('');

//   // Function to handle date input change
//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   // Function to format date
//   const formatDate = (dateString) => {
//     // Assuming dateString is in YYYY-MM-DD format
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: '2-digit',
//     });
//     return formattedDate;
//   };

//   return (
//     <div>
//       {/* Date input */}
//       <input
//         type="date"
//         value={selectedDate}
//         onChange={handleDateChange}
//       />

//       {/* Display formatted date */}
//       {selectedDate && (
//         <p>Formatted Date: {formatDate(selectedDate)}</p>
//       )}
//     </div>
//   );
// }

// export default App;

//=============================== GET IT FROM CHAT GPT ======================



