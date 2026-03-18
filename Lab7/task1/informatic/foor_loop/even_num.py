num = int(input("please insert your first number: "))
num2 = int(input("please insert your second number: "))



for i in range(num, num2 + 1):
    if i % 2 == 0:
        print(i)
