const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const output = document.querySelector(".list");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");

    li.textContent = input.value;
    deletebutton.textContent = "❌";

    li.append(deletebutton);

    output.append("li");

    deletebutton.addEventListener("click", function() {
        output.removeChild(li);
        input.focus();
    });

    input.textContent = "";
    input.focus();
});

