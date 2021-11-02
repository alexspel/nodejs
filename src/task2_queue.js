console.log('Record 1'); //1. Просто выводится

setTimeout(() => {
    console.log('Record 2'); //7. Просто выводится
    Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('Record 3'); //10. Просто выводится
            Promise.resolve().then(() => {
                console.log('Record 4'); //12. Просто выводится
            }); //11. Ставится в очередь макрозадач
        }); //9. Ставится в очередь макрозадач
    }); //8. Ставится в очередь микрозадач
}); //2. Ставится в очередь макрозадач

console.log('Record 5'); //3. Просто выводится

Promise.resolve().then(
    () => Promise.resolve()
        .then(
            () => console.log('Record 6') //6. Просто выводится
        ) //5. Ставится в очередь микрозадач
); //4. Ставится в очередь микрозадач