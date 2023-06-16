function identità<T>(arg: T) : T {
    console.log(typeof arg)
    return arg;
}

console.log(identità<number>('asd'));
console.log(identità<number>(1));