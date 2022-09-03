CLIENTID=0

generate_wire:
	echo "~~~ Running wire from: $(pwd) ~~~"
	rm -rf injection/wire_gen.go
	wire ./injection

start-server:
	go build -o sdui-backend
	./sdui-backend

start-client: 
	cd ../frontend/sui && pm2 start npm -- start

stop-client:
	pm2 stop $(CLIENTID)

get-running-client-id:
	pm2 ps

get-client-logs:
	pm2 logs

start: start-client start-server

clean:
	rm -rf ./sdui-backend