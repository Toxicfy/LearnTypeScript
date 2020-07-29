function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
    if (typeof x === 'number') {
        return x.toString().split('').reverse().join('')
    }
}