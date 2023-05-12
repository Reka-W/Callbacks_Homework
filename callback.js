function congrats() {
    let name = prompt("Enter your first name.");
    console.log(`Congratulations on finishing coding bootcamp, ${name}! Way to go!`);
}

function nextStep() {
    console.log("What's next?")
}

congrats();
setTimeout(nextStep, 4000);