#!/bin/sh

./consul agent -config-dir=/consul-config &

java -jar gateway-0.0.1-SNAPSHOT.jar