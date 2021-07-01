function func (name) {
    return function (lastname) {
        return `${name} + ${lastname}`
    }
}

const f = func("Ilya")
console.log(f("Dirin"))


