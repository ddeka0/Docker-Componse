# msp

This is an example node js project to demonstrate docker compose. It has two server and they communicate among each other.
demo: https://www.youtube.com/watch?v=TxbL-2An8Hk
## Instruction

     sudo apt-get install docker.io
     sudo apt-get install docker-compose
     
     1. git clone https://github.com/ddeka0/msp.git
     2. cd msp
     3. sudo docker-compose up
     4. open postman and try "http://localhost:9091/students"
     
![alt text](https://github.com/ddeka0/msp/blob/master/Screenshot%20from%202019-03-11%2023-38-30.png)

## Note regarding docker-compose file
         comment the volume section in prod mode
         in dev mode : run npm install inside in the host

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Debashish Deka** 
