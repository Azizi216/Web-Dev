import math

x = float(input("Enter the distance on the first day (x): "))
y = float(input("Enter the target distance (y): "))

n = math.ceil(1 + math.log(y / x) / math.log(1.1))
print(f"The athlete will run at least {y} km on day {n}.")