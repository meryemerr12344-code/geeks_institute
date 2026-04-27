from circle import Circle

def main():
    c1 = Circle(radius=5)
    c2 = Circle(diameter=10)   # radius = 5
    c3 = Circle(radius=3)

    # print
    print(c1)
    print(c2)
    print(c3)

    # area
    print("\nAreas:")
    print(c1.area())
    print(c2.area())
    print(c3.area())

    # add
    print("\nAddition:")
    c4 = c1 + c3
    print(c4)

    # comparison
    print("\nComparisons:")
    print("c1 > c3:", c1 > c3)
    print("c1 == c2:", c1 == c2)

    # sorting
    circles = [c1, c2, c3, c4]
    circles.sort()

    print("\nSorted circles:")
    for c in circles:
        print(c)


if __name__ == "__main__":
    main()
    
    
    import turtle

def draw_circles(circles):
    t = turtle.Turtle()
    t.speed(1)

    x = -200
    for c in circles:
        t.penup()
        t.goto(x, 0)
        t.pendown()
        t.circle(c.radius * 10)  # scaling
        x += 100

    turtle.done()
    draw_circles(circles)