#!/bin/sh

./consul agent -config-dir=/consul-config &

java -jar renting_service-0.0.1-SNAPSHOT.jar
