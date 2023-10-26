const content = [
  [
    "Learn React Once and Write Everywhere",
    "The main advantage of using a Library over a Framework is that Libraries are lightweight, and there is a freedom to choose different tools",
    "It is powerfull and flexible.",
    "It has a very active and versatile ecosystem.",
  ],

  [
    "JSX is a combination of HTML and JavaScript. You can embed JavaScript objects inside the HTML elements.",
    "React uses virtual DOM which is an exact copy of real DOM. Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM.",
    "One-way data binding, the name itself says that it is a one-direction flow. The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components.",
    "React uses virtual DOM and updates only the modified parts. So , this makes the DOM to run faster",
  ],

  [
    "Redux (or any other equivalent library) for state management. React alone cannot (and should not) be used to manage the state of your application if at all you are developing a scalable solution for real life problems.",
    "Axios/Fetch/Superagent (library for performing API calls). Regardless of what backend technology you may use, you have to learn how to transfer data from backend to frontend and vice-versa.",
    "Webpack/Grunt (to bundle your code).",
  ],
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-feature");
const btnRelatedResources = document.getElementById("btn-related-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(data) {
  let listConent = "";
  for (const item of data) {
    listConent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  list.innerHTML = listConent;
  tabContent.innerHTML = "";
  tabContent.append(list);
}

function highlightButton(btnID) {
  btnWhyReact.className = "";
  btnCoreFeature.className = "";
  btnRelatedResources.className = "";
  btnID.className = "active";
}

function handleClick(event) {
  const btnID = event.target.id;
  highlightButton(event.target);

  switch (btnID) {
    case "btn-why-react":
      displayContent(content[0]);
      break;
    case "btn-core-feature":
      displayContent(content[1]);
      break;
    case "btn-related-resources":
      displayContent(content[2]);
      break;
  }
}

displayContent(content[0]);
btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnRelatedResources.addEventListener("click", handleClick);
