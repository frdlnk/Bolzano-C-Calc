# Bolzano-C-Calc

## Description
Bolzano's theorem, also known as the Intermediate Value Theorem, is a fundamental result in calculus that deals with the existence of solutions to equations or the existence of roots of continuous functions. It is named after the Czech mathematician Bernard Bolzano, who first formulated it.

The theorem states that if a continuous function ```f(x)``` is defined on a closed interval ```[a, b]``` and takes on values of opposite signs at the endpoints ```f(a)``` and ```f(b)```, then there exists at least one value ```[c]``` in the interval ```[a, b]``` such that ```f(c) = 0```. In other words, the function crosses the x-axis at least once between ```a``` and ```b```.

This theorem is particularly powerful because it guarantees the existence of solutions without explicitly providing a method to find them. It is widely used in various branches of mathematics, including analysis, calculus, and numerical methods. Additionally, it serves as the basis for many important results, such as the existence of roots for polynomial equations and the convergence of numerical methods for finding solutions to equations.

But the problem is that this theorem **calculates if a ```C``` number exist, not the value of that ```C```**.

This Algorithm *uses mathematical concepts and techniques* to get an aproximation to the ```C``` number.


## Algorithm Explanation

- Asks the user the Equation of the *f(x)*
- Ask the user the *[a,b]* in which he/she wants to evaluate the function

- Now the algorithm evaluates the function to check if the signs of the *f(a)* and *f(b)* are different as the theorem says.

- After that the Algorithm **reduces** the interval in which we're evaluating and check if the *f(x₀)* of these new values of the intervals tends to 0.

<hr/>


If you have *Calculus Knowdledge* you'll see that its like doing a lim&#8339;->x₀


## Usage

Please write the **literal operations** of the ecuation

| Do this ✅     | Not this ❌   |
|------------------|---------------------|
|7*x|7x|
|7*x^2+2|7x^2+2|


If you have multiple expressions please use parentesis to englobe that expressions. Like if you do while you're evaluating big ecuations with a lot of operations

~~~ 
f(x)= 2*cos(x) / sqrt(x+1)*1-tan(x)



~~~

### Third-Party libs:
- [MathJS](https://mathjs.org/)
- [Prompt Sync](https://www.npmjs.com/package/prompt-sync)