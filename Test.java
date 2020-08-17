import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class Test {
  public static void main(String[] args) {
    Dog dog = new Dog();
    Duck duck = new Duck();

    dogSound(dog);
    duckSound(duck);

    sound(dog);
    sound(duck);
  }

  public static void dogSound(Dog dog) {
    dog.sound();
  }

  public static void duckSound(Duck duck) {
    duck.sound();
  }

  public static void sound(Animal animal) {
    animal.sound();
  }
}

abstract class Animal {
  abstract void sound();
}

class Dog extends Animal {
  public void sound() {
    System.out.println("I am a Dog");
  }
}

class Duck extends Animal {
  public void sound() {
    System.out.println("I am a Duck");
  }
}


