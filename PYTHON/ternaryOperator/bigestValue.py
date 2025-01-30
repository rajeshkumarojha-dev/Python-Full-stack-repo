
a=int(input("Enter a value: "))
b=int(input("Enter b value: "))

big=a if a>b else b if b>a else 'Both are equal'
print(big)