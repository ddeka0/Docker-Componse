# msp

This is an example node js project to demonstrate docker compose. It has two server and they communicate among each other.
demo: https://www.youtube.com/watch?v=TxbL-2An8Hk

## Architecture
![alt text](https://github.com/ddeka0/msp/blob/master/compose-architecture.png)

## Instruction

     sudo apt-get install docker.io
     sudo apt-get install docker-compose
     
     1. git clone https://github.com/ddeka0/msp.git
     2. cd msp
     3. sudo docker-compose up
     4. open postman and try "http://localhost:9091/students"
     
![alt text](https://github.com/ddeka0/msp/blob/master/Screenshot%20from%202019-03-11%2023-38-30.png)

## Note regarding docker-compose file
         python folder is for single container explanation with dockerfile
         uncomment the volume section in dev mode
         in dev mode : run npm install inside in the host
         for example in this project
         1. uncomment the volumes sectin
         2. go to team1 and run npm install
         3. go to team2 and run npm install
         4. then to docker-compose up
         why we are doing this ? this will help is development mode: auto reload of source files in the host 
         will be reflected inside the container

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Debashish Deka** 
