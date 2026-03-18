num1 = int(input("please insert a number: "))
counter = 0
for i in range(1, num1+1):
    num = int(input("please insert a number: "))
    for num in range(1, num):
        if num:
            counter+=1
print(counter)