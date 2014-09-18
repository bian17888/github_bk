class Person
    constructor: (@age, @name) ->
    can_drive: ->
        mininum_driving_age = 17
        @age >= mininum_driving_age

liam = new Person 28, "Liam"
stewie = new Person 11 ,"Stewie"

console.log("#{liam.name} can drive is #{liam.can_drive()}  #{stewie.name} can drive is #{stewie.can_drive()}")
