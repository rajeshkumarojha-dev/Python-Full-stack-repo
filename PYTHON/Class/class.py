


class Human:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f'Human {self.name}, age: {self.age}'

    def speak(self):
        print('Speaking')

    def eat(self):
        print('Eating')

person=Human('John', 36)
print(person)
person.eat()

