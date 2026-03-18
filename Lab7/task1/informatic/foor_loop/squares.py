import math
num1 = int(input("please insert your first number: "))
num2 = int(input("please insert your second number: "))

for i in range(num1, num2):
    if math.sqrt(i).is_integer():
        print(i)