#!/bin/sh

./consul agent -config-dir=/consul-config &

java -jar admin_service-0.0.1-SNAPSHOT.jar
