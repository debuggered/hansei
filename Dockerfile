FROM httpd:2.4
COPY AdventOfCode/2017/js/ /usr/local/apache2/htdocs/
EXPOSE 80
