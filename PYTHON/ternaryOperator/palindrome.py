

str = input('Enter text: ')
palindrome= 'palindrome' if str == str[::-1] else 'not palindrome' 
print(palindrome)