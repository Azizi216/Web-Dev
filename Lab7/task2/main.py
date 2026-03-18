from models import Animal, Cat, Mouse
cat = Cat("Kitty", 2, "White", "Fish")
mouse = Mouse("Jerry", 1, "Gray", 3)

animals = [cat, mouse]

for a in animals:
    print(a)
    print(a.information())
    print("Sound:", a.speak())
    print("-" * 20)

print(cat.catch())
print(mouse.hide())
cat = Cat("Kitty", 2, "White", "Fish")
mouse = Mouse("Jerry", 1, "Gray", 3)

animals = [cat, mouse]

for a in animals:
    print(a)
    print(a.information())
    print("Sound:", a.speak())
    print("-" * 20)

print(cat.catch())
print(mouse.hide())