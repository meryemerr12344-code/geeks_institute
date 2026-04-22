
from ex4 import Family
class TheIncredibles(Family):

    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    print(f"{name} uses power: {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old")

    def incredible_presentation(self):
        print("Here is our powerful family 💪")
        super().family_presentation()


# 👇 instance
incredibles = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

incredibles.incredible_presentation()

# 👇 add baby
incredibles.born(
    name="Baby Jack",
    age=0,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="JackJack"
)

print("\nAfter adding baby:\n")
incredibles.incredible_presentation()