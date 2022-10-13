CLIENTID=0

generate_wire:
	@echo "~~~ Running wire from: $(pwd) ~~~"
	@rm -rf injection/wire_gen.go
	@wire ./injection

start-server:
	@echo "🏁🏁 Starting server 🏁🏁"	
	@go build -o sdui-backend
	@./sdui-backend

# Starts both FE & BE (This shows debug console for FE only, not recommended) 
start-frontend:
	@echo "🏁🏁 Starting Service 🏁🏁"
	@cd ../frontend/sui && npm start

start-client: 
	@echo "🏁🏁 Starting frontend application 🏁🏁"
	@cd ../frontend/sui && pm2 start npm -- start

stop-client:
	@echo "Stopping cient ✋✋"	
	@pm2 stop $(CLIENTID)
	@echo " ~~~ Client with ID '$(CLIENTID)' has been stopped 🛑"

get-running-client-id:
	@pm2 ps

get-client-logs:
	@pm2 logs

start: start-client start-server
# NOT RECOMMENDED (Only shows FE debug console)
start-all: start-frontend start-server

generate-proto:
	@echo "🗑 Cleaning generated proto ~~"
	@rm -rf ./proto/structures/*
	@echo "📂 Generating protobuf ~~ "
	@protoc -I=. --go_out=./proto/structures ./proto/button_component.proto
	@echo "Done 👍"

clean:
	@echo "🧼🧼🧼 Cleaning started 🧼🧼🧼"
	@rm -rf ./sdui-backend
	@echo "Cleaning done 👍"