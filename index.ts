function buildName(firstName: string, ...restOfName: string[]) : string {
    return `${firstName} and ${restOfName.join(",")}`
}
const employName = buildName('jos', 'mac', 'lucy', 'tom')
console.log(employName)
