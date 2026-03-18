import math
num = int(input("please insert a number: "))
i = 1
while True:
    power = math.pow(2,i)
    i+=1
    if power > num:
        break
    else:
        print(power, " ")