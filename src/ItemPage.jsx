import React, {useEffect, useState} from 'react';

import axios from "axios";
import { useParams } from 'react-router-dom';

const ItemPage=()=> {
    const {id} = useParams()
    const [detail, setDetail] = useState(null)
    useEffect(()=> {
        const fetchData=async()=> {
            const res = await axios.get(`http://localhost:3001/api/users/${id}`)
            setDetail(res.data)
            console.log(detail)

        }
        fetchData()
    }, [id])

    const handleChange=(e)=> {
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })
    }

    const submitForm=(e)=> {
        e.preventDefault();
        if(detail) {
            alert("user: Id-" + detail.id + "and Name: " + detail.name + "  and Birthday: " +   detail.birthday + " successfully")
        } else {
            alert("Resource does not exist!!!")
        }
    }

    return (
        <div>
            <h1>User details</h1>
            {detail&& 
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="id">Id:</label>
                        <input type="text" name='id' value={detail.id} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="id">Name:</label>
                        <input type="text" name='name' value={detail.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Birthday:</label>
                        <input type="date" name='birthday' value={detail.birthday} onChange={handleChange}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            }
            
        </div>
    )
}
export default ItemPage;





















// // ====================================== GET IT FROM CHAT GPT ================================



// // // ItemPage.js

// // import React, {useEffect, useState} from 'react';

// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // function ItemPage() {
// //     let { id } = useParams(); // Accessing the ID parameter from the URL
// //     // Here you can fetch the item data based on the ID
// //     const [user, setUser] = useState(null)
// //     useEffect(()=> {
// //             const fetchData = async()=> {
// //                 try{
// //                     const res = await axios.get(`https://api.example.com/items/${id}`)
// //                     const data = await res.data.json()
// //                     setUser(data)
// //                     console.log(user)

// //                 } catch(error) {
// //                     console.error("Fetch data error", error)
// //                 }
// //             }

        
// //         fetchData()

// //     }, [id])

// //     return (
// //         <div>
// //         <h2>Item Details</h2>
// //         <p>ID: {id}</p>
        
// //         {/* Display other details of the item */}
// //         </div>
// //     );
// // }

// // export default ItemPage;



// =======================================   TUTORIAL CODEGYM =========================================

// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function ItemPage() {
//   const { userId } = useParams();
//   const isCreate = !userId;
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     if (userId) {
//       axios
//         .get(`http://localhost:3001/api/users/${userId}`)
//         .then(res => {
//           setUser(res.data);
//         })
//         .catch(err => {
//           throw err;
//         });
//     }
//   }, [userId]);

//   function handleChange(event) {
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value
//     });
//   }

//   function handleSubmit() {
//     axios
//       .post("http://localhost:3001/api/users", user)
//       .then(res => {
//         alert(
//           `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
//             res.data
//           )} successfully!!!`
//         );
//       })
//       .catch(err => {
//         throw err;
//       });
//   }

//   return (
//     <div>
//       <h1>User details</h1>
//       <form>
//         <div>
//           <label>Id</label>
//           <input name="id" value={user.id || ""} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Name</label>
//           <input name="name" value={user.name || ""} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Birthday</label>
//           <input
//             type="date"
//             name="birthday"
//             value={user.birthday || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
