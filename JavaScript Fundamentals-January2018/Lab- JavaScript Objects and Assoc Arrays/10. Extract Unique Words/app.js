function extractWords(arr) {
    let book = new Set();

    for (let sentence of arr) {
        let lowerSen = sentence.toLowerCase();
        let words = lowerSen.split(/[^\w+]/).filter(a => a != '');
        for (let word of words) {
            book.add(word);
        }
    }
    console.log([...book].join(', '));
}
extractWords([`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.`,
    `Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.`,
    `Vestibulum dolor diam, dignissim quis varius non, fermentum non felis`,
    `Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.`,
    `Morbi in ipsum varius, pharetra diam vel, mattis arcu.`,
    `Integer ac turpis commodo, varius nulla sed, elementum lectus.`,
`Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.`]);