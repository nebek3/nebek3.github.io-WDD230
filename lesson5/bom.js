const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const output = document.querySelector(".list");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    let text = document.createElement("span");

    li.appendChild(text);
    text.textContent = input.value;
    li.appendChild(deletebutton);
    deletebutton.textContent = "❌";
    output.appendChild(li);

    deletebutton.addEventListener("click", function() {
        output.removeChild(li);
    });

    input.value = "";
    input.focus();
});

/*const input = document.querySelector("#favchap");
const list = document.querySelector(".list");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    if (input.value.length != 0) {
        let myItem =input.value;
        input.value = "";

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";
        list.appendChild(listItem);

        listBtn.addEventListener("click", function() {
            list.removeChild(listItem);
        })

        input.focus();
    }
});*/