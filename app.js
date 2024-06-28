


const parent=React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello"),React.createElement("h2",{},"namaste")]),
            React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"hello"),React.createElement("h2",{},"namaste")])
    ]);


console.log(parent);

// const root=ReactDOM.createRoot(document.getElementById("header"))
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);