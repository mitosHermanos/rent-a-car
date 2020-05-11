#!/bin/sh

./consul agent -config-dir=/consul-config &

java -jar agentski_bekend-0.0.1-SNAPSHOT.jar
