import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class Test {
  public static void main(String[] args) {
    List<Integer> array = new ArrayList<>(Arrays.asList(1,2,3));
    for(int item: array) {
      System.out.println(item);
    }
  }
}