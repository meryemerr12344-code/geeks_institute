#Exercise 1: Cats
class Cat():
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
cat1 = Cat("Mimi",2)
cat2 = Cat("Milo", 7)
cat3 = Cat("Kitty", 5)
def oldest_cat(c1, c2, c3):
    if c1.age >= c2.age and c1.age >= c3.age:
        return c1
    elif c2.age >= c1.age and c2.age >= c3.age:
        return c2
    else:
        return c3
oldest = oldest_cat(cat1, cat2, cat3)        
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

#Exercise 2 : Dogs
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

print(davids_dog.name, davids_dog.height)
davids_dog.bark()
davids_dog.jump()

print(sarahs_dog.name, sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(davids_dog.name, "is bigger")
else:
    print(sarahs_dog.name, "is bigger")

#Exercise 3 : Who’s the song producer?
class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song([
    "There's a lady who's sure",
    "all that glitters is gold",
    "and she's buying a stairway to heaven"
])


stairway.sing_me_a_song()

#Exercise 4 : Afternoon at the Zoo

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.groups = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.groups = {}

        for animal in self.animals:
            letter = animal[0].upper()

            if letter not in self.groups:
                self.groups[letter] = [animal]
            else:
                self.groups[letter].append(animal)

    def get_groups(self):
        for letter, animals in self.groups.items():
            print(letter, ":", animals)

new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Cat")

new_york_zoo.sort_animals()

new_york_zoo.get_groups()            