start-server:
	cd backend & backend/sdui-backend

start-client:
	cd frontend/sui & npm start

start: start-server start-client