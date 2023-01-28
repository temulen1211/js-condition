//1.

let teamA = {
    score1: 96,
    score2: 108,
    score3: 89
};

let teamB = {
    score1: 88,
    score2: 91,
    score3: 110
};

const avgA = (teamA.score1 + teamA.score2 + teamA.score3)/3;

const avgB = (teamB.score1 + teamB.score2 + teamB.score3)/3;

console.log(avgA);
console.log(avgB);

//2.

if(avgA > avgB && avgA > 100) {
    console.log('Team A yallaa!');
} 
else if(avgA < avgB && avgB > 100) {
    console.log('Team B yallaa!');
} 
else if(avgA == avgB) {
    console.log('Tentslee!');
}
else {
    console.log('Yalagch bhgui!');
};