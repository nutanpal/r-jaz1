import React from "react";
import "./App.css";
import { add, sub, mult, div } from "./Calc";

const name = "Jas";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
// let myArr = [mom, dad, dida, apple, technology];
const pic1 = "https://picsum.photos/200/300";
const pic2 = "https://picsum.photos/250/300";
const pic3 = "https://picsum.photos/300/300";
const link1 = "https://flowandgrowkidsyoga.com/blogs/news/yoga-poses-for-kids-childs-pose";
// <----------------------- greeting ------------------->

let greeting = "";
//greeting on time if else
// let time = new Date(2023, 11,24, 3);
let time = new Date();
time = time.getHours();
// change cssStyle according to condition with inline styling (of span)
const cssStyle = {};
//if else
if (time >= 1 && time < 12) {
  greeting = "Good Morning";
  cssStyle.color = "goldenrod";
} else if (time >= 12 && time < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "red";
} else {
  greeting = "Good Night";
  cssStyle.color = "blue";
}
// <------------------------------------------>
function App() {
  return (
    <div className="App">
      <h1 className="heading">Hi, My Name is {name}.</h1>
      <p style={{ color: "blue", textAlign: "right" }}>
        Today's is {currDate} Time {currTime}
      </p>
      <br />
      <div className="img_div">
        <img src={pic1} alt="random Images" />
        <a href={link1} target="blank">
          <img src={pic2} alt="random Images" Yoga />
        </a>
        <img src={pic3} alt="random Images" />
      </div>
      <h2 contentEditable="true">I love Yoga!</h2>
      <div className="greet_div">
        <h1 style={{ color: "green" }}>
          {" "}
          Hello {name}, <span style={cssStyle}>{greeting}.</span>
        </h1>
      </div>
      <ul>
        <li> Calculator</li>
        <li>sum of two no is {add(20, 2)}</li>
        <li>sub of two no is {sub(20, 2)}</li>
        <li>sum of two no is {mult(20, 2)}</li>
        <li>sum of two no is {div(20, 3)}</li>
      </ul>

      <div className="hobbies">
        <h3>My Hobbies</h3>

        <ol>
          {/*  
       <h2>I love to do folllowing things:</h2> */}

          <li>Watching my favorite Tech. videos</li>
          <li>Making crafts</li>
          <li>Sketching digital products</li>
          <li>Reading Books</li>
          <li>Talking and playing with mom</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
