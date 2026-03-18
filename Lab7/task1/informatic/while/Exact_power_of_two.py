import math
num = int(input("please insert your number: "))

if math.log2(num).is_integer():
    print("Yes")
else:
    print("NO")
