import React from "react";

// below is the book component. variables set up in tne book object at the top are then passed in  here as props.
// the book component would return ant article tag which contains img author amd title.
const Book = (props) => {
  // lets destructure the props
  // there are 2 ways which we could have destructured the props. the two ways are listed below.
  // const Book = (img, title, author) =>
  const { img, title, author } = props;
  function clickHandler(e) {
    console.log(e.target);
    console.log(e);
    alert(title);
  }
  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="book img" />
      <h1>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: ".75rem", marginTop: ".25rem" }}>
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        {" "}
        Example
      </button>
    </article>
  );
};

export default Book;
