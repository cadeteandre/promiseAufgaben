//* ----------- Number-methods -----------

const promise_1: Promise<number[]> = new Promise((resolve, reject) => {
    const randomNum_1: number = Math.floor(Math.random() * 130) + 1;
    const randomNum_2: number = Math.floor(Math.random() * 130) + 1;
    const randomNum_3: number = Math.floor(Math.random() * 130) + 1;
    const randomNumArr: number[] = [randomNum_1, randomNum_2, randomNum_3];

    randomNumArr.forEach((num) => {
        if(num > 100) {
            reject('At least one of the numbers is greater than 100');
        }
    })
    resolve(randomNumArr);
})

promise_1
    .then((resp) => {
        console.log(`Original Array: ${resp}`);
        const newNumArr: number[] = resp.map((number) => number + 7);
        console.log(`After adding 7 to each: ${newNumArr}`);
        return newNumArr;
    }).then((resp) => {
        const newNumArr: number[] = resp.map((number) => number * 2);
        console.log(`After multiplying each by two: ${newNumArr}`);
        return newNumArr;
    }).then((resp) => {
        const newNumArr: number[] = resp.map((number) => number - 1);
        console.log(`After subtracting each by 1: ${newNumArr}`);
        return newNumArr;
    }).then((resp) => {
        const newNumArr: number[] = resp.map((number) => number % 2);
        console.log(`After determining the modulus of 2 for each: ${newNumArr}`);
        return newNumArr;
    }).then((resp) => {
        console.log(resp);
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log('Finished'));