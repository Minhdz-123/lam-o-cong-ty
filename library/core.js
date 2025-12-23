export default function html([first, ...string], ...values) {
    return values.reduce(
        (acc, curl) => acc.concat(curl, string.shift()),
        [first]
    )
        .filter(x => x && x != true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer(

    )
    const roots = new
}