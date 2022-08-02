build-dev:
	@ docker build -f devops/Dockerfile -t yavbot-frontend:latest .
deploy:
	@ docker stack deploy -c devops/stack.yml yavbot
rm:
	@ docker stack rm yavbot
network:
	@ docker network create --driver overlay  --attachable --scope swarm  yavbot-networks
frontend-logs:
	@ docker logs $$(docker ps -q -f name=yavbot-fronten_frontend)
backend-logs:
	@ docker logs $$(docker ps -q -f name=yavbot-backend_backend)
#docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" | grep yavbot
volume:
	@ docker volume create yavbot_data
	@ docker volume create pgadmin_yavbot_data
volume-rm:
	@ docker volume rm yavbot_data
	@ docker volume rm pgadmin_yavbot_data