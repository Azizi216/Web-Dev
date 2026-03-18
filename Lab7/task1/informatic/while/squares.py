num = int(input("Please insert a number: "))

for i in range(1, num + 1):
    square = i * i  # or math.pow(i, 2)

    if square > num:
        break
    print(square)