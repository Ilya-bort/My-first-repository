function func (name) {
    return function (lastname) {
        return `${name} + ${lastname}`
    }
}

const f = func("Kira")
console.log(f("Dirina"))


