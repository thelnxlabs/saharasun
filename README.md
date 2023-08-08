## README

1. Team Lead to fork the original repo   
2. each team member should then clone from the forked repo of the team lead  
3. each student should have received certain parameters to use at runtime: BACKEND_PORT and FRONTEND_PORT  
4. those parameters are also present in each respective home directtory in a .env file   
5. Pull the required docker images:  
   * docker pull thelinuxlabs/saharasun-be:0.1  
   * docker pull thelinuxlabs/saharasun-fe:0.1  
6. `cd $HOME`
7. Start the backend container:  
   * `docker run -d --name backend -p $BACKEND_PORT:5000 --env-file .env saharasun-be:0.1` 
8. Start the frontend container:  
   * `docker run -d --name frontend -e BACKEND_PORT=$BACKEND_PORT -p $FRONTEND_PORT:3000 saharasun-fe:0.1` 
9. Open the browser pointing to your cloud instance: **http://cloud_instance_ip:$FRONTEND_PORT/**

