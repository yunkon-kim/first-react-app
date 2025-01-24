import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

///////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         // console.log(json);
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     // https://coinpaprika.com/v1/tickers
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? (
//         <strong>"Loading..."</strong>
//       ) : (
//         <select>
//           {coins.map((coin) => (
//             <option key={coin.id}>
//               {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [toDo, setTodo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => {
//     setTodo(event.target.value);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     // console.log(toDo);
//     // setTodo("");
//     if (toDo === "") {
//       return;
//     }

//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setTodo("");
//   };
//   // console.log(toDos);

//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do here..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((toDo, index) => (
//           <li key={index}>{toDo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////

// import { useState, useEffect } from "react";

// function Hello(){

//   // // function like a destructor
//   // function byeFn(){
//   //   console.log("bye :(");
//   // }

//   // // function like a constructor
//   // function hiFn(){
//   //   console.log("created :)");
//   //   return byeFn;
//   // }
//   // // the useEffect function is called when the component is created
//   // useEffect(hiFn, []);

//   // '() => {}' is a anonymous function like the 'function() {}
//   useEffect(() => {
//     console.log("created :)");
//     return () => {
//       console.log("bye :(");
//     }
//   },[]);

//   return (
//     <h1>hello</h1>
//   );
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);

//   return (
//     <div>
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//       {showing ? <Hello /> : null}
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");

//   const onClick = () => setValue((prev) => prev +1);
//   // console.log("i run all the time");
//   useEffect( () => {
//     console.log("i run only once.");
//   }, []); // only run once

//   useEffect( () => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]); // only run when 'keyword' changes

//   useEffect( () => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]); // only run when 'counter' changes

//   const onChange = (event) => setKeyword(event.target.value);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// };

// export default App;
