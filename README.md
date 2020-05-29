Proxy that mirrors start.spring.io but downloads generated projects to host instead of to user's browser.

```
$ mkdir njs && chmod 777 njs
$ docker build -t proxy .
$ docker run -p 8080:80 -v `pwd`/njs:/tmp/njs -v `pwd`/conf.d:/etc/nginx/conf.d proxy
```

Look at localhost:8080 in a browser and you will see the Initializr. You can make it download a project:

```
$ curl -v localhost:8080/starter.zip?dependencies=webflux
...
< HTTP/1.1 200 OK
< Server: nginx/1.17.10
< Date: Fri, 29 May 2020 14:40:30 GMT
< Content-Type: text/plain
< Content-Length: 2
< Connection: keep-alive
< 
OK
$ ls -l njs
total 56
-rw-r--r-- 1 systemd-resolve systemd-journal 56089 May 29 15:40 starter.zip
```