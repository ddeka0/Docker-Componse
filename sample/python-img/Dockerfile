FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y python3 python3-pip

ADD hello.py /home/hello.py

WORKDIR /home

CMD ["python3","hello.py"]