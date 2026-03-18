num1 = int(input("please insert a number:"))
while num1 > 10:
    last_digit = num1 % 10
    print("the last digit is:", last_digit)
    break
result  = num1 % 10
print("the last digit is:", result)
