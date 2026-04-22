

#Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter length: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print(multiples)
  
#Challenge 2

word = input("Enter a word: ")

result = ""

for letter in word:
    if len(result) == 0 or letter != result[-1]:
        result += letter

print(result)