class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        power1 = self.run_speed() * self.weight
        power2 = other_dog.run_speed() * other_dog.weight

        if power1 > power2:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"


# 👇 create dogs
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Max", 3, 25)
dog3 = Dog("Rocky", 4, 18)

print(dog1.bark())
print(dog1.fight(dog2))
print(dog2.fight(dog3))