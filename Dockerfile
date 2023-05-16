FROM --platform=linux/x86_64 ubuntu:22.04

RUN yes | unminimize
RUN apt-get update && \
    apt-get install -y locales
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata 
RUN locale-gen ja_JP.UTF-8
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /try-docker