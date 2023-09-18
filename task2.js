// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let cntr = 0;
    return {
        increment: function () {
            return ++cntr;
        },
        decrement: function () {
            return --cntr;
        }
    };
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
