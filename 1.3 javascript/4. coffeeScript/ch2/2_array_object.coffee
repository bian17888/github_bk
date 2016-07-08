# Demo 01 : 普通js写法 -> for in

# arr = ['ONE','TWO','THREE']
# item.toUpperCase() for item in arr
# console.log arr



# Demo 02 : uppercased = () 写法

# arr = ['ONE','TWO','THREE']
# uppercased = (item.toUpperCase() for item in arr)
# console.log uppercased
# #console.log arr



# Demo 03 : 对象的 ’for key, value of‘ 方法

tom =
	name : 'Tom'
	age : 8

for key, value of tom
	console.log key, '=', value
