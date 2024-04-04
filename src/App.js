// ======================= [Thực hành] Lấy danh sách User bằng Axios(REACT HOOK) ============================

// import React, {useEffect, useState} from "react";

// import axios from "axios";

// const App=()=> {
//   const [user, setUser]=useState([]);
//   useEffect(()=> {
//     const fetchData = async()=> {
//       try{
//         const res = await axios.get("http://localhost:3001/api/users")
//         const data = await res.data
//         setUser(data)
//         console.log(user)

//       } catch(error) {
//         console.error("Error fetch data", error)
//       }
//     }
//     fetchData();

//   },[])
//   return (
//     <div>
//       <h1>This is data fro user</h1>
//       {user.map((item)=> 
//         <ul key={item.id}>
//           <li style={{listStyle:"none"}}>{item.id} - {item.name}</li>
//         </ul>
//       )}
//     </div>
//   )

  
// }
// export default App;


//=========================== [Thực hành] Lấy danh sách User bằng Axios(CLASS COMPONENT)==============

// import React ,{Component} from "react";

// import axios from "axios";

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       user: [],
//     }
//   }
//   componentDidMount(){
//     const {user} = this.state
//     const fetchData= async()=> {
//       try{
//         const res = await axios.get("http://localhost:3001/api/users")
//         const data = await res.data
//         this.setState({user: data})
//         console.log(user)
//       } catch (error) {
//         console.error("Fetch data error", error)
//       }

//     }
//     fetchData();

//   }
//   render(){
//     const {user} = this.state
//     return (
//       <div>
//         <h1>This is data from user !!!!!</h1>
//         {user.map((item)=> 
//           <ul key={item.id}>
//             <li>{item.id} - {item.name}</li>
//           </ul>
//         )}
//       </div>
//     )
//   }
// }
// export default App;

//=========================== [Thực hành] Lấy danh sách User bằng Axios(CLASS COMPONENT)==============

import React ,{Component} from "react";

import axios from "axios";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user: [],
    }
  }
  componentDidMount(){
    const {user} = this.state
    axios.get ("http://localhost:3001/api/users")
    .then(res=> {
      this.setState({user: res.data})
      console.log(user)
    })
    .catch(error=>{
      console.error("Fetch data error", error)
    })

  }
  render(){
    const {user} = this.state
    return (
      <div>
        <h1>This is data from user ????</h1>
        {user.map((item)=> 
          <ul key={item.id}>
            <li style={{listStyle:"none"}}>{item.id} - {item.name}</li>
          </ul>
        )}
      </div>
    )
  }
}
export default App;

