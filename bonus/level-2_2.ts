//* -------------- Lorem ipsum --------------

function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const loremIpsumString: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        const stringArr: string[] = loremIpsumString.split(' ');
        stringArr.length = numberOfWords;
        if(numberOfWords > 50) {
            reject('Number of words cannot exceed 50')
        } else {
            resolve(stringArr);
        }
    })
}

generateLoremIpsum(30)
    .then((resp) => {
        console.log(resp);
        return resp;
    })
    .then((resp) => {
        const newArr = resp.map((word) => word.toUpperCase());
        console.log(newArr);
        return newArr;
    })
    .then((resp) => {
        const newArr: string[] = [...resp];
        for(let i: number = 0; i < resp.length; i++) {
            newArr[i] = newArr[i].replaceAll('L', '').replaceAll('T', '').replaceAll('U', '');
        }
        console.log(newArr);
        return newArr;
    })
    .then((resp) => {
        const newArr: string[] = resp.filter((word) => word.length > 8);
        console.log(newArr);
        return newArr;
    })
    .then((resp) => {
        const finalString: string = resp.join(' ').toLowerCase();
        console.log(finalString);
    })
    .catch((error) => console.error(error));