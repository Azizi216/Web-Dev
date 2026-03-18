num = int(input("please insert a number: "))

arr = []
for i in range(1, num+1):
    element = int(input("please insert your number: "))
    arr.append(element)


for i in range(len(arr)):
    if arr[i] % 2 == 0:
        print(arr[i])
