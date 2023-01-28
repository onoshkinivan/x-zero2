let cells = document.querySelectorAll('#field td');
let winner = document.querySelector('#winner');
let result = document.querySelector('#text')
let close = document.querySelector('#close')

function start(cells) {
    let i = 2;
    for (let cell1 of cells) {
        cell1.addEventListener('click', function stat() {
            if (i % 2 == 0) {
                this.textContent = '☭';
                this.style.color = 'red'
            } else {
                this.textContent = '☮';
                this.style.color = 'white'
            }
            this.removeEventListener('click', stat);
            if (iswinner(cells) === true) {
                winner.style.display = 'flex';
                result.textContent = `Победил ${this.textContent}`;
            } else if (i == 10) {
                winner.style.display = 'flex';
                result.textContent = `Ничья!`;
            }
            i++
        })
    }
}

close.addEventListener('click', function () {
    winner.style.display = 'none';
})

function iswinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

start(cells);


