from menu import menu
from div import div
from sum import sum
from sub import sub
from mul import mul

while True :
        menu()
        ch=input('Enter your choice:')
        if ch == "@":
            break
        else:
            match(ch):
                case '1':
                    sum()
                case '2':
                    sub()
                case '3':
                    mul()
                case '4':
                    div()
                case _:
                    print('Wrong choice')