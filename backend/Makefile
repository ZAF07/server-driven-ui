CLIENTID=0

generate_wire:
	@echo "~~~ Running wire from: $(pwd) ~~~"
	@rm -rf injection/wire_gen.go
	@wire ./injection

start-server:
	@echo "ππ Starting server ππ"	
	@go build -o sdui-backend
	@./sdui-backend

# Starts both FE & BE (This shows debug console for FE only, not recommended) 
start-frontend:
	@echo "ππ Starting Service ππ"
	@cd ../frontend/sui && npm start

start-client: 
	@echo "ππ Starting frontend application ππ"
	@cd ../frontend/sui && pm2 start npm -- start

stop-client:
	@echo "Stopping cient ββ"	
	@pm2 stop $(CLIENTID)
	@echo " ~~~ Client with ID '$(CLIENTID)' has been stopped π"

get-running-client-id:
	@pm2 ps

get-client-logs:
	@pm2 logs

start: start-client start-server
# NOT RECOMMENDED (Only shows FE debug console)
start-all: start-frontend start-server

generate-proto:
	@echo "π Cleaning generated proto ~~"
	@rm -rf ./proto/structures/*
	@echo "π Generating protobuf ~~ "
	@protoc -I=. --go_out=./proto/structures ./proto/button_component.proto
	@echo "Done π"

clean:
	@echo "π§Όπ§Όπ§Ό Cleaning started π§Όπ§Όπ§Ό"
	@rm -rf ./sdui-backend
	@echo "Cleaning done π"