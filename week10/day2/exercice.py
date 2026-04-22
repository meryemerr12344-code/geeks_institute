# Exercise 1 : Hello World
print("Hello world\n" * 4)
#Exercise 2 : Some Math
print((99**3)*8)
#Exercise 3 : What’s your name ?

user_name=input("What’s your name? ")
my_name="hajar"

if user_name == my_name:
 print("Wow! We have the same name Twin energy activated!")
else:
    print("Nice to meet you! But we are not name twins")

#Exercise 4 : Tall enough to ride a roller coaster


your_height = int (input("what your height in centimeters? "))
if your_height > 145 :
    print("that states they are tall enough to ride.")
else:
     print(" that says they need to grow some more to ride.")

# Exercise 5 : Favorite Numbers
my_fav_numbers={10,8,13,14,13}
my_fav_numbers.add(55)
my_fav_numbers.pop()
friend_fav_numbers ={16,5,24,9}
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(my_fav_numbers)     
print (our_fav_numbers)

#Exercise 6: Tuple
#Non, ce n’est pas possible d’ajouter des éléments à un tuple. tu ne peux ni modifier, ni ajouter, ni supprimer des éléments

#Exercise 7: List

basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")
basket.pop()
basket.append("kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)

#Exercise 8 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami" in sandwich_orders:
  sandwich_orders.remove("Pastrami")

finish_sandwiches=[]
while sandwich_orders:
    sandwich= sandwich_orders.pop()
    finish_sandwiches.append(sandwich)

for sandwiche in finish_sandwiches:
     print(f"I made your {sandwiche} sandwich")