#!/usr/bin/env sh

# Create certbot directory
if [ ! -d /var/www/certbot ]; then
	# create certbot directory if not exists
	mkdir -p /var/www/certbot
fi

# Cerbot SSL 인증서 발급 및 갱신
certbot certonly --webroot -w /var/www/certbot -d ${DOMAIN} --email ${EMAIL} --agree-tos --no-eff-email --keep-until-expiring

# 자동 갱신 crontab 추가
echo "0 12 * * * root certbot renew --quiet" >> /etc/crontab
