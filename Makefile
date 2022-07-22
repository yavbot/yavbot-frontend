build-dev:
	@ docker build -f devops/Dockerfile -t yavbot-frontend:latest .
deploy:
	@ docker stack deploy -c devops/stack.yml yavbot
rm:
	@ docker stack rm yavbot
network:
	@ docker network create --driver overlay  --attachable --scope swarm  yavbot-networks
kibana-logs:
	@ docker logs $$(docker ps -q -f name=elk_yavbotfrontend)
kibana-logs:
	@ docker logs $$(docker ps -q -f name=elk_yavbotbackend)