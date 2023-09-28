const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hii im from h1 tag"),
    React.createElement("h2", {}, "hii im from h2 tag"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hii im from h1 tag"),
    React.createElement("h2", {}, "hii im from h2 tag"),
  ])]
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
