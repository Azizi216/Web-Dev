def average(array):
    total = 0
    array = set(array)
  
    result = sum(array)/len(array)
    return result

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)