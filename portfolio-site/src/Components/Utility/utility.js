const jsxMultiplier = (element, n) => {
    let jsx = [];
    for (let i = 0; i < n; ++i) {
        jsx.push(element);
    }
    return jsx;
}

export default jsxMultiplier;