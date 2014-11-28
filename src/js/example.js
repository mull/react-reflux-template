var exampleComponent = {
    doStuff: function() {
        var p = document.createElement("p");
        p.innerText = "Hi there. If you can see this, it works.";
        document.body.appendChild(p);
    }
};

module.exports = exampleComponent;