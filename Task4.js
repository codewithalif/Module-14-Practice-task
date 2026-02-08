// Nested way to friend treat take

const myScore = 85; 
const friendScore = 85;

if (myScore > 80) {
    
    if (friendScore > 80) {
        console.log('Then we go for lunch');
    } 
    else if (friendScore >= 60) {
        console.log('Good luck next time');
    } 
    else if (friendScore >= 40) {
        console.log('Keep friend\'s message unseen');
    } 
    else {
        console.log('Block your friend');
    }
} 
else {
    console.log('Go to home and sleep and act sad');
}
