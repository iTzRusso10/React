export function Sum({numbers}){
    numbers = [10,20]
    const sum = numbers.reduce((a,b) => a + b);
        return(
        <h1>The sum is: {sum}</h1>
        )
}