import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
// other files
import { data } from "./data";
import Book from "./Book";

// the book component is now passed on the main page here which would be rendered om the browser.
// the '.map()' method was used to pass the objects in the above array and the {...book is a spread operator} used to spread the paramter of the .map method.
function BookList() {
  return (
    <section className="booklist">
      {data.map((data) => {
        //(the {...data is a spread operator, it's used to access all the elements in the data object individually})
        return <Book key={data.id} {...data}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
