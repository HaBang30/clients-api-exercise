
//=========== [Thực hành] Hiện loading trong thời gian chờ gọi API bằng Promise (fetch)===============

// import React, {useEffect, useState} from "react";

// const Loading = ()=> {
//   const [user, setUser] = useState([])
//   const [loading, setLoading] = useState(true)
//   useEffect(()=> {
//     const fetchData=()=> {
//         return new Promise((resolve, reject)=> {
//           setTimeout(()=> {
//             fetch("http://localhost:3001/api/users")
//               .then(response=> {
//                 if(!response.ok) {
//                   throw new Error("Fetch data error")
//                 }
//                   return response.json();
//               })
//               .then(data=> {
//                 resolve(data)
//               })
//               .catch(error=> {
//                 console.error("Error from fetch data", error)
//                 reject(error)
//               })
//           }, 3000)
          
//         })
//       }
//       fetchData()
//         .then(data=> {
//           setUser(data)
//           setLoading(false)
//         })
//         .catch(error=>{
//           console.error("Error from fetch data", error)
//           setLoading(false)
//               })
//   },[])
//   return (
//     <div>
//       <h1>USER</h1>
//       {loading? (<p>Loading......</p>):
//         (<ul>
//           {user.map((item)=>
//             <li key={item.id}>{item.name}</li>
//           )}
//         </ul>)
      
//       }
//     </div>

//   )
// }
// export default Loading


//=========== [Thực hành] Hiện loading trong thời gian chờ gọi API bằng Promise (axios)===============

// import React, {useEffect, useState} from "react"

// import axios from "axios"

// const Loading =()=> {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(()=>{
//   const fetchData=()=> {
//     return new Promise((resolve, reject)=> {
//       setTimeout(()=> {
//         axios.get("http://localhost:3001/api/users")
//           .then(response => {
//             if(!response.data) {
//               throw new Error("Fetch error to data")
//             }
//               return response.data
//           })
//           .then(data=> {
//             resolve(data)
//           })
//           .catch(error=> {
//             console.error("Error data error", error)
//             reject(error)
//           })

//       }, 3000)
//     })
//   }
//   fetchData()
//     .then(data=> {
//       setUser(data)
//       setLoading(false)
//     })
//     .catch(error=> {
//       console.error("Error fetch data", error)
//       setLoading(false)
//     })

//   },[])
//   return (
//     <div>
//       <h1 style={{color:"blue"}}>USER</h1>
//       {loading? <p>Loading.....</p>: 
//         <ul>
//           {user.map((item)=> 
//             <li key={item.id}>{item.name}</li>
//           )}
//         </ul>
      
//       }

//     </div>
//   )
// }
// export default Loading

//=========== [Thực hành] Hiện loading trong thời gian chờ gọi API bằng ASYNC-AWAIT (axios)===============

// import React, {useEffect, useState} from "react";

// import axios from "axios";

// const Loading=()=> {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(()=> {
//     setTimeout(()=> {
//       const fetchData=async()=> {
//         const res = await axios.get("http://localhost:3001/api/users");
//         const data = res.data
//         if(data) {
//           setUser(data)
//           setLoading(false)
//         }else {
//           console.log("Fetch data error")
//           setLoading(false)
//         }
//       }
//       fetchData()
//     },3000)

//     // other method to write setTimeout function is:
//     // setTimeOut(()=> {fetchData},3000)
   
    

//   },[])
//   return (
//     <div>
//       <h1 style={{color:"red"}}>USER</h1>
//       {loading? <p>Loading......</p>:
//         <ul>
//           {user.map((item)=> 
//             <li key={item.id}>{item.name}</li>
//           )}
//         </ul>
      
//       }

//     </div>
//   )
// }
// export default Loading


//=========== [Thực hành] Hiện loading trong thời gian chờ gọi API bằng ASYNC-AWAIT and PROMISE (axios)===============

import React, {useEffect, useState} from "react";

import axios from "axios";

export default class Loading extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      users:[],
      loading: false
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    this.getUser()
      .then(res=> {
        this.setState({users: res.data})
      })
      .catch(error=> {
        throw error
      })
      .finally(()=> {
        this.setState({loading:false})
      })

  }
  getUser=async()=> {
    await new Promise(resolve=> {
      setTimeout(resolve, 3000)
    })
    return await axios.get("http://localhost:3001/api/users")
  }
  render(){
    const {loading, users} = this.state
    return (
      <div>
        <h1>THIS IS USER</h1>
        {loading? <p>Loading.....</p>: 
          <ul>
            {users.map((user)=> 
              <li key={user.id}>{user.name}</li>
            )}
          </ul>
        }

      </div>
    )
  }
}