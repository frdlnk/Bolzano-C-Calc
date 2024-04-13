const m = require("mathjs")
const pr = require("prompt-sync")()

const math = m.parser()

let eq: string = ""
let valA: string = ""
let valB: string = ""

function getEquationAndValues(): void {
    eq = pr("Type the equation of your f(x): ")
    valA = pr("Type the a value of your [a,b]: ")
    valB = pr(`Type the b value of your [${valA}, b]: `)
}

function compileEq(val: string): string {
    return eq.split("x").join(val)
}

function evaluateEq(a: string, b: string): Array<number> {
    const eqa: string = compileEq(a)
    const eqb: string = compileEq(b)

    const fa = math.evaluate(eqa)
    const fb = math.evaluate(eqb)

    if (Math.abs(fa) === fa) return []

    return [fa, fb]
}


function limImageOfIntervalToZero(): any {
    const result = evaluateEq(valA, valB)
    if (result.length == 0) return `This function doesn't touch the X axis in the [${valA}, ${valB}]`

    let limitResult: number[] = result;
    let a = parseFloat(valA)
    let b = parseFloat(valB)

    while (Math.abs(limitResult[0]) > 0.000000000001) {
        a += (a < 0) ? 0.5 : -0.5;
        b += (b < 0) ? 0.5 : -0.5;
        limitResult = evaluateEq(a.toString(), b.toString())

        if(limitResult[0] == 0.000000000001) break;
    }
    return `f(c)=0  C=${a}`
}


export {
    eq,
    valA,
    valB,
    getEquationAndValues,
    limImageOfIntervalToZero

}