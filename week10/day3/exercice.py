#Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dict = dict(zip(keys, values))

print(my_dict)

#Exercise 2 : Cinemax #2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name} doit payer {price}$")
    total_cost += price

print(f"Le coût total est {total_cost}$")

#Exercise 3: Zara
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
brand["number_stores"]=2
print("Zara targets:", ", ".join(brand["type_of_clothes"]))
brand["country_creation "]="spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]   
print (brand["international_competitors"][-1])
print (brand["major_color"]["US"])

print(len(brand))
print(brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara) 
print (brand["number_stores"])


# Exercise 4 : Some Geography
def describe_city(city, country="Morocco"):
    print(f"{city} is in {country}")

describe_city("Casablanca")
describe_city("Reykjavik", "Iceland")
describe_city("Paris", "France")    


#Exercise 5 : Random

import random

def check_number(user_number):
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success! You guessed the correct number 🎉")
    else:
        print("Fail ")
        print(f"Your number: {user_number}")
        print(f"Random number: {random_number}")

number = int(input("Enter a number between 1 and 100: "))
check_number(number)        

# Exercise 6 : Let’s create some personalized shirts !
def make_shirt(size ,text:"shirt"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("M", "Hello World")    

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt()    

make_shirt("medium")
make_shirt("small", "Code is life")

# Exercise 7 : Temperature Advice
import random

def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(5, 23)
    elif season == "summer":
        return random.uniform(24, 40)
    elif season == "autumn":
        return random.uniform(10, 25)
    else:
        return random.uniform(-10, 40)

def main():
    season = input("Enter a season (winter, spring, summer, autumn): ").lower()

    temp = get_random_temp(season)

    print(f"The temperature right now is {temp:.1f} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today ")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don't forget your coat ")
    elif 16 < temp <= 23:
        print("Nice weather ")
    elif 24 <= temp <= 32:
        print("It's warm, enjoy the sun ")
    elif 32 < temp <= 40:
        print("It's really hot! Stay hydrated ")        
main()        
 

#Exercise 8 : Star Wars Quiz

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]
def ask_questions(data):
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")

        if user_answer.lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print(f"\nCorrect answers: {correct}")
    print(f"Incorrect answers: {incorrect}")

    if wrong_answers:
        print("\nYour mistakes:")
        for wrong in wrong_answers:
            print(f"- Question: {wrong['question']}")
            print(f"  Your answer: {wrong['your_answer']}")
            print(f"  Correct answer: {wrong['correct_answer']}\n")    
correct, incorrect, wrong_answers = ask_questions(data)
show_results(correct, incorrect, wrong_answers)            