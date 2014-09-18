# Demo 01 : splats allow function arguments to be collapsed into an array
# <Code>:
# concat = (first, second, others...) ->
#     first + second + others.join ''

concat = (first, second, others...) ->
    first + second + others.join ''
result = concat 'one', 'two', 'three', 'four'

console.log result



# Demo 02 : splats allow arrays to be expanded into function arguments
# <Code>:
# concat = ['a', 'b', 'c']... ->

concat = (first, second, others...) ->
    first + second + others.join ''
result = concat ['a', 'b', 'c', 'd', 'f']...

console.log result

