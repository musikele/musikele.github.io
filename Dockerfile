# Version: 0.0.1 
FROM ubuntu:18.04 
LABEL maintainer="michele.nasti@gmail.com"
RUN apt-get update && apt-get install -y nginx make build-essential ruby ruby-dev curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs 
RUN gem install bundler
RUN gem install jekyll
WORKDIR /root/
# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf
# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/
ADD . .
RUN bundle install 
RUN bundle exec jekyll build --config=_config.yml,_config_dev.yml
RUN cp -r _site/* /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80