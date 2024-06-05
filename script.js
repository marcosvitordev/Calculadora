
function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLastChar() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (e) {
        alert("Expressão inválida");
    }
}

function changeTheme(theme) {
    var body = document.body;
    body.classList.remove('light', 'dark', 'colorful');
    body.classList.add(theme);
}



/*temas */

changeTheme('light')