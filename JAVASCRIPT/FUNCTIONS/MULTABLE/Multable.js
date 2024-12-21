

function multable(num) {
    document.write(`Multiple table of ${num}<br>`)
    for (let i = 1; i <= 10; i++) {
        document.write(`${num} X ${i} = ${num * i}<br>`)
    }
}
multable(12)
