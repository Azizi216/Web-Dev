num = int(input("please insert your number: "))
arr = []
counter = 0
for i in range(num):
    elemnet = int(input("please insert your elemnets: "))
    arr.append(elemnet)
    if i > 2 & arr[i-1] < elemnet:
        counter +=1

print(counter)  