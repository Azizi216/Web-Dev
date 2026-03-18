num1 = int(input("Please insert the number: "))

counter = 0

for i in range(1, num1+1):
    if num1 % i ==0:
        counter+=1


print(counter)