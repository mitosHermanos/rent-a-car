FROM consul:1.7.2
COPY entrypoint.sh /entrypoint.sh
COPY / /consul/config/
RUN chmod +x /entrypoint.sh
EXPOSE 8500
EXPOSE 8282
CMD ["/entrypoint.sh"]
