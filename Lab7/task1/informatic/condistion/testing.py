# Read input from standard input
system_answer = input().strip()
student_answer = input().strip()

# Compare the answers
if system_answer == student_answer:
    print("YES")
else:
    print("NO")