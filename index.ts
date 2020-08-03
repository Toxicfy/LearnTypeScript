function reverse(x: number): number
function reverse(x: string): string
function reverse(x) {
    if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    }
}

function getToken(key: string): any {
    return importValue.get(key) ? importValue.get(key) : (window as any).cache[key]
}
