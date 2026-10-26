import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    Calculator c = new Calculator();

    @Test
    void testAddition() {
        assertEquals(80, c.add(65, 15));
    }

    @Test
    void testSubtraction() {
        assertEquals(5, c.subtract(10, 5));
    }

    @Test
    void testMultiplication() {
        assertEquals(50, c.multiply(10, 5));
    }

    @Test
    void testDivision() {
        assertEquals(5, c.divide(25,5 ));
    }


    @Test
    void testDivisionByZero() {
        assertThrows(
            ArithmeticException.class,
            () -> c.divide(10, 0)
        );
    }

    @Test
void testAdditionBoundaryA() {
    assertEquals(80, c.add(61, 19));
}

    @Test
    void testAdditionAAtBoundary() {
        assertThrows(IllegalArgumentException.class,
                () -> c.add(60, 19));
    }

    @Test
    void testAdditionBoundaryB() {
        assertEquals(80, c.add(61, 19));
    }

    @Test
    void testAdditionBAtBoundary() {
        assertThrows(IllegalArgumentException.class,
                () -> c.add(61, 20));
    }
}