import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    Calculator c = new Calculator();

    @Test
    void testAddition() {
        assertEquals(58, c.add(2, 3));
    }

    @Test
    void testSubtraction() {
        assertEquals(8, c.subtract(10, 5));
    }

    @Test
    void testMultiplication() {
        assertEquals(50, c.multiply(10, 5));
    }

    @Test
    void testDivision() {
        assertEquals(5, c.divide(25, 5));
    }

    @Test
    void testDivisionByZero() {
        assertThrows(
            ArithmeticException.class,
            () -> c.divide(10, 0)
        );
    }
}