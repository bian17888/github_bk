class Counter
	# count : (input) ->
	# 	word_num = 0
	# 	arr = input.split(' ')
	# 	for index, value of arr
	# 		word_num += value.length
	# 	word_num

	count : (input) ->
		word_num = 0
		trimmed = input.trim()
		words = trimmed.split(/[^a-zA-Z_0-9-']+/)
		#解决头尾空字符bug
		words = (word for word in words when word isnt "")
		for index, value of words
			word_num += value.length
		word_num

word_counter = new Counter

console.log word_counter.count "Once-upon@#, a time xx"
console.log word_counter.count ".Once-upon@#, . a time." #头尾空字符bug
