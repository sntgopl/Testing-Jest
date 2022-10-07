import Calculator from './task3.js';

describe("calculator sum tests", () => {
    test("calculator sum 1", () => {
        //Arrange
        const test = new Calculator(1, 2);

        //Act
        const result1 = test.sum();

        //Assert
        expect(result1).toEqual(3);
    });

    test("calculator sum 2", () => {
        const test = new Calculator(-15, 5);
        
        const result2 = test.sum();

        expect(result2).toEqual(-10);
    });

    test("calculator sum 3", () => {
        const test = new Calculator(1.5, 2.5);
        
        const result3 = test.sum();

        expect(result3).toBeCloseTo(4);
    });
});

describe("calculator subtract tests", () => {
    test("calculator subtract 1", () => {
        const test = new Calculator(3, 2);

        const result1 = test.substract();

        expect(result1).toEqual(1);
    });

    test("calculator subtract 2", () => {
        const test = new Calculator(-10, 10);

        const result2 = test.substract();

        expect(result2).toEqual(-20);
    });

    test("calculator subtract 3", () => {
        const test = new Calculator(10, 10);

        const result3 = test.substract();

        expect(result3).toBeCloseTo(0);
    });
});

describe("calculator multiply tests", () => {
    test("calculator multiply 1", () => {
        const test = new Calculator(1, 2);

        const result1 = test.multiply();

        expect(result1).toEqual(2);
    });

    test("calculator multiply 2", () => {
        const test = new Calculator(10, 10);

        const result2 = test.multiply();

        expect(result2).toEqual(100);
    });

    test("calculator multiply 3", () => {
        const test = new Calculator(10, -1);

        const result3 = test.multiply();

        expect(result3).toBeCloseTo(-10);
    });
});

describe("calculator divide tests", () => {
    test("calculator divide 1", () => {
        const test = new Calculator(6, 3);

        const result1 = test.divide();

        expect(result1).toEqual(2);
    });

    test("calculator divide 2", () => {
        const test = new Calculator(-15, 3);

        const result2 = test.divide();

        expect(result2).toEqual(-5);
    });

    test("calculator divide 3", () => {
        const test = new Calculator(10, 10);

        const result3 = test.divide();

        expect(result3).toBeCloseTo(1);
    });
});