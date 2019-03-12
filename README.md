# msp

This is an example node js project to demonstrate `docker compos`e. It has two server and they communicate among each other.
demo: https://www.youtube.com/watch?v=TxbL-2An8Hk

## Architecture
![alt text](https://github.com/ddeka0/msp/blob/master/compose-architecture.png)

Postman gets a response from Team1 server, which contains a list of names of 12 stundets. `Team1` server has `6` names locally. It fetches other `6` names from the `Team2` server.

Team1 and Team2 containers are attached to the same network created by the docker environment. The network name is `msp_default`. Docker creates it automatically when we run `docker-compose build` command. We can view all the network by the following command.
          
          1. docker network ls 
          
 It shows the following output in my system:
          
          NETWORK ID          NAME                      DRIVER              SCOPE
          f2bc03d3ce45        bridge                    bridge              local
          02528e1acfdc        docker_examples_default   bridge              local
          5d9a29764261        host                      host                local
          e7cc89889dd2        msp_default               bridge              local
          ae06630302b7        none                      null                local
          
Then inspect the `msp_default` network. 
          
          1. docker network inspect msp_default 
          
It is basically a `JSON` file. It has a container key with the values shown beflow. The values contains all the network endpoints addresses.(`layer2` and `latyer3` addresses)           
    
       "Containers": {
            "648486f163e2526d0fba8c5f1007a60d2b44fd9b5d58ee63e097bf84b428b281": {
                "Name": "team1",
                "EndpointID": "84836eec668b21efd67984a8aef377a990b0a84f9038fe024f2efb1bf9629f04",
                "MacAddress": "02:42:ac:13:00:02",
                "IPv4Address": "172.19.0.2/16",
                "IPv6Address": ""
            },
            "64ef7069d7d91641f13047ead4a8fef6e24dc3ada5db500536a0540904237228": {
                "Name": "team2",
                "EndpointID": "4099c70760281928c298dadabbafdd228254de226325283d6a236c3ce34198d5",
                "MacAddress": "02:42:ac:13:00:03",
                "IPv4Address": "172.19.0.3/16",
                "IPv6Address": ""
            }
        },

Inside the `Team1` source code, we can request `Team2` server using the following `URL`.
          
          http://team2:9091/students

where endpoint `/students` is the API created in the `Team2` server. `team2` automatically resolves to the `IPV4` address.

## Instruction to run the project

     sudo apt-get install docker.io
     sudo apt-get install docker-compose
     
     1. git clone https://github.com/ddeka0/msp.git
     2. cd msp
     3. sudo docker-compose up
     4. open postman and try "http://localhost:9091/students"
     
![alt text](https://github.com/ddeka0/msp/blob/master/Screenshot%20from%202019-03-11%2023-38-30.png)

## Note regarding docker-compose file
         python folder is for single container explanation with dockerfile
         
         uncomment the volume section in dev mode in dev mode : run npm install inside in the host
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
