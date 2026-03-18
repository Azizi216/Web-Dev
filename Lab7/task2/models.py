# Base Class
class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Animal sound"

    def information(self):
        return f"{self.name} is {self.age} years old and {self.color}"

    def __str__(self):
        return f"Animal(Name: {self.name}, Age: {self.age}, Color: {self.color})"


# Child Class 1
class Cat(Animal):
    def __init__(self, name, age, color, food):
        super().__init__(name, age, color)
        self.food = food

    def speak(self):  # overriding
        return "Meow Meow"

    def catch(self):
        return f"{self.name} catches the ball"

    def __str__(self):
        return f"Cat(Name: {self.name}, Age: {self.age}, Color: {self.color}, Food: {self.food})"


# Child Class 2
class Mouse(Animal):
    def __init__(self, name, age, color, lives):
        super().__init__(name, age, color)
        self.lives = lives

    def speak(self):  # overriding
        return "Squeak!"

    def hide(self):
        return f"{self.name} is hiding"

    def __str__(self):
        return f"Mouse(Name: {self.name}, Age: {self.age}, Color: {self.color}, Lives: {self.lives})"