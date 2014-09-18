# Demo 01 : 普通写法
# map = (value) ->
# 	if value % 3 is 0 && value % 5 is 0
# 		return 'fizzbuzz'
# 	else if value % 3 is 0
# 		return 'fizz'
# 	else if value % 5 is 0
# 		return 'buzz'
# 	value

# for i in [0...100]
# 	console.log map(i)



# Demo 02 : 
class Value
	# constructor 关键字，写错，导致调试好久！！
	constructor : (@number) ->

	map : ->
		if @_is_fizz()
			return 'fizz'
		if @_is_buzz()
			return 'buzz'
		if @_is_fizzbuzz()
			return 'fizzbuzz'
		@number

	_is_division_by : (divisor) ->
		@number % divisor is 0

	_is_fizz : ->
		@_is_division_by 3

	_is_buzz : ->
		@_is_division_by 5

	_is_fizzbuzz : ->
		@_is_fizz() && @_is_buzz()

for i in [1..100]
	console.log(new Value(i).map()) 
