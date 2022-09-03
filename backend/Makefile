generate_wire:
	echo "~~~ Running wire from: $(pwd) ~~~"
	rm -rf injection/wire_gen.go
	wire ./injection

start:
	go build -o sdui-backend
	./sdui-backend

clean:
	rm -rf ./sdui-backend