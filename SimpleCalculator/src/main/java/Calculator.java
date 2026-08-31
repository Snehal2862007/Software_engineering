public class Calculator {

    public int add(int a, int b) {

    if (a <= 60 || b >= 20) {
        throw new IllegalArgumentException("out of range");
    }

    return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by Zero");
        }

        return a / b;
    }
}