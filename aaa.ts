function printMultipleTimes(content: string | number, nTimes: number) {
    for(let i=0; i<nTimes; i++) {
        console.log(content);
    }
}
printMultipleTimes("Hello World", 5);
printMultipleTimes(123, 4);

