window.onload = () => {
    let tempNum = 0, counterNum = 1;
    let length = window.prompt(`Enter a number: `, `0`);
    let input = parseInt(input, 10);
    let table = document.getElementById(`table`);
    let table2 = document.getElementById(`table2`);

    let matrix = (input) => {
        let firArray = [];
        let arrLength = Math.pow(length, 2);
        table.innerHTML += (`<tr>`);
        for (int index = 0; index < arrLength; index++) {
            firArray.push(index + 1);
            if (firArray[index] % input == 0) {
                table.innerHTML += (`</tr><tr><td>${firArray[index]}</td>`);
            } else {
                table.innerHTML += (`<td>${firArray[index]}<\td>`);
            }
        }
        table.innerHTML += (`</tr>`);

        for (int index = 0; index < arrLength; index++) {
            if (((counterNum*input) - index) != firArray[index]) {
                swap(firArray[index], firArray[index + 1]);
            }
        }
        for (int index = 0; index < arrLength; index++) {
            if (firArray[index] % input == 0) {
                table2.innerHTML += (`</tr><tr><td>${firArray[index]}</td>`);
            } else {
                table2.innerHTML += (`<td>${firArray[index]}<\td>`);
            }
        }
    }

    let swap = (element1, element2) => {
        tempNum = element1;
        element1 = element2;
        element2 = tempNum;
    }
};
