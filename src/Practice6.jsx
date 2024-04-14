// import './practice6.css'

// import React, {useEffect, useState} from "react";

// import axios from "axios";

// const Practice6 =()=> {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true)
//     useEffect(()=> {
//         const fetchData= async()=> {
//             try{
//                 const getUser = await axios.get("http://localhost:3001/api/users");
//                 const getArticle = await axios.get("http://localhost:3001/api/articles");
//                 await axios.all([getUser, getArticle])
//                     .then(
//                         axios.spread((res1, res2)=> {
//                             const users = res1.data.map(user=> {
//                                 return {
//                                     ...user,
//                                     articles: res2.data.filter(item=> {
//                                         return item.user_if === user.id
//                                     })
//                                 }

//                             })
//                             setData(users)
                        
//                         })
//                     )

//             }catch(error) {
//                 console.error("")
    
//             }
            
//         }
//         setTimeout(()=> {
//             fetchData();
//             setLoading(false)

//         }, 3000)
       
//     },[])
//     return (
//         <div>
//             { console.log(data) }
//             <h1>Get article amount from user</h1>
//             {loading? <h4 style={{color:"blue"}}>Loading........</h4>:
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Article Numbers</th>
//                             <th>Tittle of article</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item)=>
//                             <tr key={item.id}>
//                                 <td>{item.name}</td>
//                                 <td>{item.articles.length}</td>
//                                 <td>
//                                     <ul>
//                                         {item.articles.map((article)=> 
//                                             <li key={article.id}>{article.title}</li>
                            
//                                         )}
//                                     </ul>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             }

//         </div>

//     )
// }
// export default Practice6;


// ===================================== RESOURCE FROM CHAT GPT TO CONSULT =======================

// import './practice6.css';

// import React, { useEffect, useState } from "react";

// import axios from "axios";

// const Practice6 = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [getUser, getArticle] = await Promise.all([
//                     axios.get("http://localhost:3001/api/users"),
//                     axios.get("http://localhost:3001/api/articles")
//                 ]);

//                 const users = getUser.data.map(user => {
//                     return {
//                         ...user,
//                         articles: getArticle.data.filter(article => article.user_if === user.id)
//                     };
//                 });

//                 setData(users);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         setTimeout(() => {
//             fetchData();
//         }, 3000);

//     }, []);

//     return (
//         <div>
//             <h1>Get article amount from user</h1>
//             {loading ? <h4 style={{ color: "blue" }}>Loading........</h4> :
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Article Numbers</th>
//                             <th>Articles</th> 
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item) =>
//                             <tr key={item.id}>
//                                 <td>{item.name}</td>
//                                 <td>{item.articles.length}</td>
//                                 <td>
//                                     <ul>
//                                         {item.articles.map(article => (
//                                             <li key={article.id}>{article.title}</li> 
//                                         ))}
//                                     </ul>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             }
//         </div>
//     );
// };

// export default Practice6;

// ===================================== GET ARTICLES AMOUNT FROM USER (TRY AGAIN) =======================

// import "./practice6.css";

// import React, {useEffect, useState} from "react";

// import axios from "axios";

// export default function Loading () {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(()=> {
//         const fetchData = async()=> {
//             try{
//                 const getUser = await axios.get("http://localhost:3001/api/users");
//                 const getArticle = await axios.get("http://localhost:3001/api/articles");
//                 await axios.all([getUser, getArticle])
//                     .then(
//                         axios.spread((res1, res2)=> {
//                             const users = res1.data.map((user)=> {
//                                 return {
//                                     ...user,
//                                     articles: res2.data.filter((item)=> item.user_if === user.id)
//                                 }
//                             })
//                             setData(users)
//                         })
//                     )
//             } catch(error) {
//                 console.error("Fetch data error", error);
//             } finally{
//                 setLoading(false)
//             }
//         }
//         setTimeout(()=> {
//             fetchData();
//         }, 3000)

//     },[])
//     return (
//         <div>
//             <h1>Get article amount from user</h1>
//             {loading? <p>Loading.........</p>: 
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>User Name</th>
//                             <th>Article Numbers</th>
//                             <th>Article's title</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item)=> 
//                             <tr key={item.id}>
//                                 <td>{item.name}</td>
//                                 <td>{item.articles.length}</td>
//                                 <td>
//                                     {item.articles.map((article)=> 
//                                         <li key={article.id}>{article.title}</li>
//                                     )}
//                                 </td>
//                             </tr>
//                         )}

//                     </tbody>
//                 </table>
//             }

//         </div>

//     )
// }


// ===================================== GET ARTICLES AMOUNT FROM USER (TRY AGAIN) =======================

// import './practice6.css'

// import React, {useEffect, useState} from "react";

// import axios from 'axios';

// export default function Practice6() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(()=> {
//         const fetchData =async()=> {
//             try{
//                 const [getUser, getArticle] = await Promise.all([
//                     axios.get("http://localhost:3001/api/users"),
//                     axios.get("http://localhost:3001/api/articles")
//                 ]);
//                 const users = getUser.data.map((user)=> {
//                     return {
//                         ...user,
//                         articles: getArticle.data.filter((item)=> {
//                             return item.user_if === user.id
//                         })
//                     }
//                 })
//                 setData(users)

//             }catch(error) {
//                 console.error("Fetch data error", error)
//             } finally{
//                 setLoading(false)
//             }
//         }
//         setTimeout(()=> {
//             fetchData();
//         }, 3000)

//     },[])
//     return (
//         <div>
//             <h1>Get article amount from user</h1>
//             {loading? <p>Loading.....</p>: 
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>User Name</th>
//                             <th>Article Numbers</th>
//                             <th>Article's Title</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item)=> 
//                             <tr key={item.id}>
//                                 <td>{item.name}</td>
//                                 <td>{item.articles.length}</td>
//                                 <td>
//                                     <ul>
//                                         {item.articles.map((article)=> 
//                                             <li key={article.id}>{article.title}</li>
//                                         )}
//                                     </ul>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             }
        
//         </div>
//     )
// }


// ===================================== GET ARTICLES AMOUNT FROM USER (TRY AGAIN) =======================

import './practice6.css';

import React, {useEffect, useState} from "react";

import axios from 'axios';

export default function Practice6 () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const fetchData = async()=> {
            try{
                const getUser = await axios.get("http://localhost:3001/api/users")
                const getArticle = await axios.get("http://localhost:3001/api/articles")
                await axios.all([getUser, getArticle])
                    .then(
                        axios.spread((res1, res2)=> {
                            const users = res1.data.map((user)=> {
                                return {
                                    ...user, // return id and name
                                    articles: res2.data.filter((item)=>{
                                        return item.user_if === user.id
                                    })
                                }
                            })
                            setData(users)
                        })

                    )

            } catch(error) {
                console.error("Fetch data error", error)
            } finally{
                setLoading(false)
            }
        }
        setTimeout(()=> {
            fetchData()
        }, 3000)

    },[])
    return (
        <div>
            <h1>Get articles amount from user</h1>
            {loading? <p style={{color:"red"}}>Loading........</p>: 
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Article Amount</th>
                            <th>Article's Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=> 
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.articles.length}</td>
                                <td>
                                    <ul>
                                        {item.articles.map((article)=> 
                                            <li key={article.id}>{article.title}</li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }

        </div>
    )
}
