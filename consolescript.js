const input = document.getElementById("input");
const output = document.getElementById("output");

const containers = {
    help: document.querySelector(".help-container"),
    aboutme: document.querySelector(".aboutme-container"),
    projects: document.querySelector(".project-container"),
    contact: document.querySelector(".contact-container"),
    education: document.querySelector(".education-container"),
    resume: document.querySelector(".resume-container")
};

function handleCommand(command) {
    if (command in containers) {
        containers[command].style.display = "block";

    } else {
        displayOutput(`Command not found: ${command}. Type 'help' for a list of commands.`);
    }
}

function clear() {
    for (const command in containers) {
        containers[command].style.display = "none";
    }

    const myDivs = document.querySelectorAll(".myDiv");
    const myBrs = document.querySelectorAll(".myBr");

    if (myDivs && myBrs) {
        myDivs.forEach(node => node.remove());
        myBrs.forEach(node => node.remove());
    }
}

function displayOutput(text) {
    const div = document.createElement("div");
    div.className = "myDiv";
    const br = document.createElement("br");
    br.className = "myBr";
    div.textContent = text;
    output.prepend(br);
    output.prepend(div);
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        clear();
        const command = input.value.trim();
        displayOutput(`janh@portfolio:~$ ${command}`);
        handleCommand(command);
        input.value = "";
    }
});

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target !== input) {
        input.focus();
    }
})




