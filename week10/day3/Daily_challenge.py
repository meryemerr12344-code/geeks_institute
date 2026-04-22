word = input("Enter a word: ")

result = {}

for index, letter in enumerate(word):
    if letter in result:
        result[letter].append(index)
    else:
        result[letter] = [index]

print(result)