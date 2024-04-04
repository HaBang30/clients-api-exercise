// =====================[Bài đọc] Giới thiệu Web API với kiến trúc RESTful ===========================


//   NOTE: What is API

// - API là viết tắt của Application Programming Interface (giao diện lập trình ứng dụng);
// - Với API, các lập trình viên có thể tiếp cận, truy xuất dữ liệu từ máy chủ thể hiện chúng trên ứng dụng phần mềm hoặc website của mình một cách dễ dàng hơn.


// NOTE: What is web API?

// - Là hệ thống API được sử dụng trong các hệ thống website. Hầu hết các website đều ứng dụng đến Web API cho phép bạn kết nối, trao đổi thông tin, dữ liệu qua lại hoặc cập nhật cơ sở dữ liệu. 
// - Ví dụ: Bạn thiết kế chức năng login thông Google, Facebook, Twitter, Github…
// - khi thực hiện truy xuất thông tin, Web API sẽ trả lại dữ liệu ở dạng JSON hoặc XML thông qua giao thức HTTP hoặc HTTPS.


// NOTE: Những tính năng của Web API:

// - Tự động hóa sản phẩm: Đối với Web API, sẽ giúp người dùng có thể dễ dàng tự động quản lý được công việc. 
// - Tích hợp linh động:
// + API cho phép lấy nội dung ở bất kỳ Website hay ứng dụng nào đó một cách dễ dàng, khiến trải nghiệm người dùng được tăng lên.
// - Cập nhật thông tin theo thời gian thực:
// + API giúp thay đổi và cập nhật những thông tin mới theo thời gian thực. Công nghệ này sẽ giúp những thông tin truyền đi tốt hơn, chính xác hơn và dịch vụ cung cấp cũng được linh hoạt hơn.

// NOTE: What is RESTful API là gì?

// - Một Web API được xây dựng tuân theo kiến trúc REST thì được gọi là RESTful API.
// - REST (REpresentational State Transfer) là một dạng chuyển đổi cấu trúc dữ liệu, một kiểu kiến trúc để viết API. Mặc dù REST có thể được sử dụng với mọi giao thức, nhưng nó thường dùng HTTP cho Web API.
// - RESTful API là một tiêu chuẩn dùng trong việc thiết kế các API cho các ứng dụng web để quản lý các resource (tài nguyên – ví dụ như là tệp văn bản, ảnh, âm thanh, video, hoặc dữ liệu di động,… 
// - Nó cũng bao gồm các trạng thái tài nguyên được định dạng và truyền tải qua HTTP). RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến ngày nay để cho các ứng dụng (web, mobile…) khác nhau giao tiếp với nhau.

// NOTE : Những ràng buộc kiến trúc cơ bản của RESTful API:

// 1. Client–server (Máy khách – máy chủ):
// -Ràng buộc này hoạt động dựa trên ý tưởng rằng máy khách và máy chủ phải hoàn toàn tách biệt và được phép phát triển riêng lẻ, độc lập. 
// - Với cách thức này, việc người dùng thực hiện các thay đổi ở ứng dụng hoặc việc máy chủ điều chỉnh cơ sở dữ liệu hoặc thay đổi ứng dụng cũng không ảnh hưởng đến cấu trúc dữ liệu của nhau.

// 2. Stateless (Phi trạng thái):
// -  Bất kỳ một RESTful API nào cũng phải phi trạng thái. Mỗi yêu cầu (request) từ máy khách đến máy chủ có thể được thực hiện độc lập và phải chứa mọi thông tin cần thiết để máy chủ hiểu và hoàn thành nó.

// 3. Cacheable (Lưu được vào bộ nhớ cache);
// - API phi trạng thái có thể tăng số lượng request, nhất là khi có nhiều cuộc gọi đến và đi. Do đó, RESTful API được thiết kế để lưu trữ dữ liệu vào cache để tăng tính tái sử dụng.


// 4. Uniform interface (Giao diện thống nhất):
// - REST áp dụng những nguyên tắc chung của kỹ thuật phần mềm cho giao diện thành phần để đảm bảo tổng thể kiến trúc hệ thống được đơn giản hóa, có tính thống nhất:

// 5. Layered system (Hệ thống phân lớp):
// - Kiểu hệ thống phân lớp cho phép một kiến trúc chứa nhiều lớp phân cấp. Mỗi lớp sẽ có một chức năng và trách nhiệm cụ thể. Cách thức của REST là hạn chế hành vi của các thành phần trong một lớp. Mỗi thành phần hoàn toàn không thể thấy được những gì ở bên ngoài lớp mà chúng đang tương tác.

// 6. Code on demand (Mã theo yêu cầu):
// - Mã theo yêu cầu là một ràng buộc tùy chọn, không bắt buộc của REST. Ràng buộc này cho phép người dùng mở rộng chức năng của máy khách. Họ có thể tải xuống và thực thi mã dưới dạng các ứng dụng nhỏ (applet) hoặc tập lệnh (scripts). Điều này sẽ đơn giản hóa công việc cho máy khách, bằng cách giảm các tính năng bắt buộc triển khai từ trước.


// NOTE : Ưu điểm của RESTful API:

// + Giúp cho ứng dụng rõ ràng hơn
// + Dữ liệu được trả về với nhiều định dạng khác nhau như: xml, html, json….
// + Code đơn giản và ngắn gọn
// + Chú trọng vào tài nguyên của hệ thống


// NOTE : Cách hoạt động của RESTful API:
// - REST hoạt động chủ yếu dựa vào các giao thức HTTP:
// + GET (SELECT): Trả về một Resource hoặc một danh sách Resource.
// + POST (CREATE): Tạo mới một Resource.
// + PUT (UPDATE): Cập nhật thông tin cho Resource.
// + DELETE (DELETE): Xoá một Resource.


// NOTE : 
// RESTful API không sử dụng session và cookie, nó sử dụng một access_token với mỗi request:

// Dữ liệu trả về của API thường có cấu trúc như sau:
// {
//     "status_code": 200,
//     "data": [
//         {
//             "name": "AB",
//             "email": " AB@example.com",
//             "address": "Da Nang"
//         },
//         {
//             "name": "BC",
//             "email": "BC@codegym.vn",
//             "address": "Ho Chi Minh"
//         }
//     ],
//     error_messages: ""
// }

// NOTE : Tuỳ thuộc vào dự án mà api sẽ trả về các form dữ liệu khác nhau, tuy nhiên bạn nên thống nhất một loại form dữ liệu cho tất cả các api để đảm bảo tính thống nhất.

// NOTE: Status code
// - Khi chúng ta request một API nào đó thường thì sẽ có vài status code để nhận biết sau:

// NOTE: Tổng kết
// = Hiểu được khái niệm API
// = Hiểu được khái niệm RESTful API
// = Nắm được các ràng buộc kiến trúc cơ bản của Restful API
// = Cách hoạt động của RESTful API



// ======================= [Bài đọc] Sử dụng công cụ Mock API để mô phỏng Backend ==========================


// NOTE : 
// == Trong quá trình phát triển phần mềm, việc phải gửi-nhận, giao tiếp với server là điều không thể tránh khỏi. Giả sử như khi chúng ta đang code một đoạn nhận và xử lý data từ server, mỗi lần muốn thay đổi response từ server để kiểm tra code, ta lại phải vào đổi code phía backend như vậy thì rất bất tiện và tốn thời gian. Việc sử dụng Mock API sẽ giúp chúng ta xử lí vấn đề này.

// NOTE: Tại sao sử dụng Mock API? 
// Lợi ích của Mock API là:

// = Các nhà phát triển frontend và các nhà phát triển phụ trợ có thể làm việc song song, do đó phát triển nhanh chóng.
// = Giao diện người dùng có thể hoạt động như một ứng dụng độc lập trong quá trình phát triển mà không có bất kỳ phụ thuộc API phụ trợ nào.
// = Dễ dàng demo
// = Mock API có thể dễ dàng được thay thế bằng API thực khi nó đã sẵn sàng.

// NOTE: Cấu hình Mock API:

// == Thư viện npm sử dụng để mock API là connect-api-mocker
// == connect-api-mocker có thể được sử dụng với rất nhiều Node framework như Connect, Express và BrowserSync.

// NOTE: Trong bài này chúng ta sẽ sử dụng Express và connect-api-mocker
// Cài đặt:






// ==================================[Bài đọc] Thực hiện HTTP request với Axios ===================


// NOTE: What is axios:
// - Axios là một trong những thư viện HTTP được các nhà phát triển Javascript yêu thích. Nó được sử dụng để gửi các yêu cầu HTTP, đặc biệt là các yêu cầu AJAX, từ phía máy khách cũng như phía máy chủ.
// - Axios đơn giản hóa công việc này bằng cách cung cấp một giao diện trừu tượng dễ sử dụng trên giao diện XMLHttpRequest của Javascript với một số chức năng và tùy chọn cấu hình thân thiện với người dùng


// NOTE: HTTP là gì ?
// - HTTP (Hypertext Transfer Protocol) là một giao thức nằm ở tầng ứng dụng (Application layer) của tập giao thức TCP/IP, sử dụng để truyền nhận dữ liệu giữa các hệ thống phân tán thông qua internet:

// NOTE: Quá trình làm việc của HTTP sẽ diễn ra như sau:
// - HTTP client thiết lập một kết nối TCP đến server. Nếu thiết lập thành công, client và server sẽ truyền nhận dữ liệu với nhau thông qua kết nối này, kết nối được thiết lập còn gọi là socket interface bao gồm các thông tin: địa chỉ IP, loại giao thức giao vận (chính là TCP), và port (mặc định là 80).
// - Sau khi kết nối thành công, client gửi một HTTP request đến server thông qua socket interface vừa được thiết lập.  Trong gói tin request sẽ chứa đường dẫn yêu cầu.
// - Server sẽ nhận và xử lý request từ client thông qua socket, sau đó đóng gói dữ liệu tương ứng và gửi một HTTP response về cho client. Dữ liệu trả về sẽ là một file HTML chứa các loại dữ liệu khác nhau như văn bản, hình ảnh,…
// - Server đóng kết nối TCP.
// - Client nhận được dữ liệu phản hồi từ server và đóng kết nối TCP.

// NOTE: What is Axios????.
// - Axios là một thư viện HTTP Client dựa trên Promise. Cơ bản thì nó cung cấp một API cho việc xử lý XHR (XMLHttpRequests).

// NOTE: Đặc điểm của Axios
// - Tạo XMLHttpRequests từ trình duyệt
// - Thực hiện các http request từ node.js
// - Hỗ trợ Promise API
// - Chặn request và response
// - Chuyển đổi dữ liệu request và response
// - Hủy requests
// - Tự động chuyển đổi về dữ liệu JSON
// - Hỗ trợ phía client để chống lại CSRF(tấn công giả mạo)

// ==================================== Examples: GET REQUEST ==========================================


// import React from "react";
// import axios from "axios";

// export default class TheoryApiClient extends React.Component {
//   state = {
//     persons: []
//   };

//   componentDidMount() {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map(person => (
//           <li>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ==================================== Examples: GET REQUEST ==========================================

// import React from "react";
// import axios from "axios";

// export default class TheoryApiClient extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Persons: [],
//         }
//     }

//     componentDidMount() {
//         axios
//         .get(`https://jsonplaceholder.typicode.com/users`)
//         .then(response => {
//             const persons = response.data
//             this.setState({
//                 persons
//             })
//         })
//         .catch(error => console.log(error))
//     }

//     render() {
//         const {persons} = this.state
//         return (
//             <div>
//                 {persons&&
//                         <ul>
//                             {persons.map(person=>
//                                 <li>{person.name}</li>
//                             )}
//                         </ul>      
//                 }
//             </div>

//         )
//     }
// }


// ==================================== Examples: GET REQUEST (TRY AGAIN)==========================================
// ==== GET ===

// import React from "react";
// import axios from "axios";

// export default class TheoryApiClient extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             persons:[],
//             values:true
//         }
//     }

//     componentDidMount() {
//         axios 
//         .get (`https://jsonplaceholder.typicode.com/users`)
//         .then (response => {
//             const datas = response.data
//             this.setState(prevState=> ({
//                 ...prevState,
//                 persons: datas
//             }))
//         })
//         .catch(error => console.log(error))
//     }
//     render() {
//         const {persons} = this.state
//         return (
//             <div>
//                 {persons&& 
//                     <ul>
//                         {persons.map(person => 
//                             <li>{person.name}</li>
//                         )}
//                     </ul>
//                 }
//             </div>

//         )
//     }
// }

//===================================== EXAMPLES: POST REQUEST ==============================

// NOTE: POST Request
// - Ta sử dụng phương thức POST cho phép người dùng nhập vào biểu mẫu sau đó gửi nội dung đến API

// import React from "react";
// import axios from "axios";

// export default class TheoryApiClient extends React.Component {
//   state = {
//     name: ""
//   };

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

//===================================== EXAMPLES: POST REQUEST (TRY AGAIN)==============================

// import React from "react";
// import axios from "axios";

// export default class TheoryApiClient extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             inputValue:""
//         }
//     }

//     handleChangeValue=(e)=> {
//         this.setState({inputValue: e.target.value})

//     }
    
//     submitForm=(e)=> {
//         const {inputValue} = this.state
//         e.preventDefault();
//         const user = {
//             userName: inputValue
//         }

//         axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
//         .then(response =>{
//             console.log(response);
//             console.log(response.data);

//         })
//         .catch(error=> console.log(error))

//     }

//     render() {
//         const {inputValue} = this.state
//         return (
//             <form onSubmit={this.submitForm}>
//                 <label htmlFor="name">UserName</label>
//                 <input type="text" value={inputValue} onChange={this.handleChangeValue} />
//                 <button type="submit">Submit</button>

//             </form>
//         )
//     }
// }

//===================================== EXAMPLES: DELETE REQUEST==============================

// import React from "react";
// import axios from "axios";

// export default class TheoryApiClient extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             id:""
//         }

//     }
//     handleChangeValue=(e)=> {
//         this.setState({id: e.target.value})
//     }

//     submitForm=(e)=> {
//         e.preventDefault();
//         axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
//         .then(response => {
//             console.log("Response", response)
//             console.log("Data", response.data)
//         })
//         .catch(error=> console.log(error))


//     }
    
//     render() {
//         return (
//             <form onSubmit={this.submitForm}>
//                 <label htmlFor="name">yourName:</label>
//                 <input type="text" name="id" value={this.state.id} onChange={this.handleChangeValue} />
//                 <button type="submit">Submit</button>
//             </form>
//         )
        
//     }
// }


// Ngoài ra chúng ta có thể cung cấp rất nhiều các option mới cho request, nhưng dưới đây là một số option phổ biến nhất:

// = baseURL: nếu bạn chỉ định một base URL, nó sẽ được đính vào trước bất cứ một URL tương đối nào mà bạn sử dụng.
// = headers: một object gồm các cặp key/value có thể gửi trong header của request.
// = params: một object gồm các cặp key/value mà sẽ được serialize và đính vào URL dưới dạng một query string.



// NOTE: ===== Cấu trúc đối tượng response trả về từ server =======


// {
//   // Dữ liệu cần lấy từ máy chủ
//   data: {},

//   // Mã trạng thái HTTP của yêu cầu
//   status: 200,

//   // Mô tả trạng thái tương ứng với mã trạng thái ở trên
//   statusText: 'OK',

//   // Thông tin header của hồi đáp (response)
//   headers: {},

//   // config được thiết lập trước khi gửi request
//   config: {},

//   // là thực thể của ClientRequest nếu sử dụng Node.js và XMLHttpRequest trong trình duyệt
//   request: {}
// }



//================ [Bài đọc] Xử lý bất đồng bộ với Promise và Async/Await =====================

// NOTE: 
// - Khi lập trình JavaScript, bạn sẽ thường xuyên phải thực hiện các công việc mất thời gian như: request lên server, lấy dữ liệu từ database, đọc/ghi file,… Nếu bạn chỉ xử lý đồng bộ thôi thì chắc chắn sẽ rất mất thời gian. Để giải quyết vấn đề này, JavaScript cung cấp một số công cụ hỗ trợ bạn xử lý bất đồng bộ rất tốt như sử dụng callback, promise hay async/await.
// + Đồng bộ: có nghĩa là thực hiện các công việc một cách tuần tự, công việc này xong thì mới được thực hiện các công việc khác. Ví dụ có 2 công việc A và B thì khi có nghĩa là A thực hiện xong trước rồi mới tới lượt B. Điều này nó sẽ ảnh hưởng đến hiệu suất của người dùng.
// + Bất đồng bộ: Với cách xử lý bất đồng bộ, khi A bắt đầu thực hiện, chương trình tiếp tục thực hiện B mà không đợi A kết thúc. Việc mà bạn cần làm ở đây là cung cấp một phương thức để chương trình thực hiện khi A hoặc B kết thúc.

// - Cơ chế giúp bạn thực hiện việc này trong JavaScript là sử dụng Callback, Promise hoặc Async/await.


// NOTE: Sử dụng Promise để xử lý bất đồng bộ:
// - Promise sinh ra để xử lý kết quả của một hành động cụ thể, kết quả của mỗi hành động sẽ là thành công hoặc thất bại và Promise sẽ giúp chúng ta giải quyết câu hỏi “Nếu thành công thì làm gì? Nếu thất bại thì làm gì?”

// - Khi một Promise được khởi tạo thì nó có một trong ba trạng thái sau:
// + Fulfilled: Hành động xử lý xong và thành công
// + Rejected: Hành động xử lý xong và thất bại
// + Pending: Hành động đang chờ xử lý hoặc bị từ chối

// NOTE: Cách Tạo Promise:
// var promise = new Promise(callback): callback is a function with 2 params pass:
// var promise = new Promise(function(resolve, reject){}):
// + resolve: là một hàm callback xử lý cho hành động thành công
// + reject: là một hàm callback xử lý cho hành động thất bại


// NOTE: Khái niệm Async/Await:
// - Là một cơ chế giúp bạn thực hiện các thao tác bất đồng bộ một cách tuần tự hơn. Async/await vẫn sử dụng Promise nhưng mã nguồn của bạn sẽ trong sáng và dễ theo dõi.
// - Để sử dụng, bạn phải khai báo hàm với từ khóa async, await

// - Async: khai báo một hàm bất đồng bộ:
// + Tự động biến đổi một hàm thông thường thành một Promise.
// + Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
// + Async cho phép sử dụng Await.

// - Await: sẽ được sử dụng ở trước các thao tác cần đồng bộ , tạm dừng việc thực hiện các hàm async
// + Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
// + Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
// + Await chỉ có thể được sử dụng bên trong các

// Example:
// async function() {
//     try {
//       const user = await api.getUser('sun_user');
//       const posts = await api.getPostsOfUser(user);
//       const comments = await api.getCommentsOfPosts(posts);
  
//       console.log(comments;
//     } catch (err) {
//       console.log(err);
//     }
//   }

// NOTE: Cần lưu ý là kết quả trả về của async function luôn là một Promise.
// async function hello() {
//     return 1
//   }
//   console.log(hello() instanceof Promise) // true
//   hello().then(console.log) // 1

// NPOTE: Xử lý lỗi trong Async / Await
// - Một điều tuyệt vời khác về Async / Await là nó cho phép chúng ta bắt các lỗi không mong đợi bằng cách sử dụng try / catch

// Examples: 
// async function doSomethingAsync(){
//     try {
//         // This async call may fail.
//         let result = await someAsyncCall();
//     } catch(error) {
//         // If it does we will catch the error here.
//     }  
// }






