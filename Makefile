help:
	@echo "Available commands:"
	@echo "\t serve - run the development environment"
	@echo "\t build - build for production"

build:
	npx rollup -c

serve:
	npx rollup -c -w
