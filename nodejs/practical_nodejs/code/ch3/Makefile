REPORTER = spec
MOCHA_OPTS = --ui bdd -c
TESTS = tests/*.js

test :
	clear
	echo Starting test **********************************************************************
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	$(TESTS) \
	echo Ending test

.PHONY : test