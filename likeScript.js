function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function like() {
    while (true) {
        var likebtn = document.querySelectorAll('button[aria-label="Like"]');
        likebtn[0].click()
        await sleep(10)
    }
}

like();
