import math

class Circle:

    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide radius or diameter")

    # getters
    def get_radius(self):
        return self.radius

    def get_diameter(self):
        return self.radius * 2

    # area
    def area(self):
        return math.pi * (self.radius ** 2)

    # print circle (dunder)
    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, area={self.area():.2f})"

    # add two circles
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    # compare >
    def __gt__(self, other):
        return self.radius > other.radius

    # compare ==
    def __eq__(self, other):
        return self.radius == other.radius

    # for sorting
    def __lt__(self, other):
        return self.radius < other.radius