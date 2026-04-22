class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Mabrouk! A new baby is born 🎉")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False

    def family_presentation(self):
        print(f"Family {self.last_name}")
        for member in self.members:
            print(member)


# 👇 instance
family = Family("Smith", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

family.family_presentation()
print(family.is_18("Michael"))

family.born(name="Baby", age=0, gender="Male", is_child=True)
family.family_presentation()