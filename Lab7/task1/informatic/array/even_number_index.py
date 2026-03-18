num = int(input("please insert the length of array: "))

arr= []

for i in range(1, num+1):
    elemnt = int(input("please insert your elements: "))
    arr.append(elemnt)
   
for i in  range(len(arr)):
    if i%2 ==0:
        print(arr[i])