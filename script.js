const heros = ['spiderman', 'bootan', 'I-main'],
    villans = ['Jjoker', 'trump', 'humans'];

function battel(p1, p2) {
    console.log(`1 player is: ${p1}`);
    console.log(`1 player is: ${p2}`);

    let amountOfTimes = 3,
        playerOneCounter = 0,
        playerTwoCounter = 0;

    for (let i = 0; i < amountOfTimes; i++) {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        console.log('randomNumber:', randomNumber);
    }
}

battel(heros[1], villans[0])