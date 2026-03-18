def xor(x, y):
   
    return 1 if (x != y) else 0  


if __name__ == "__main__":
    x, y = map(int, input().split())  
    result = xor(x, y)
    print(result)