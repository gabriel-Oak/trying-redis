Hello, this is just a simple, but powerfully scallable queue examble.
fell free to create a .env file and put yout mailtrap.io or similar to
test it. You can also edit docker-compose.yml and set the enviromonts there.

After you got everything setted up, run docker-compose up and see the magic 
happen :D

The nodejs app is "simulating" a fake user registration, using queue to send an 
welcome email and then performing a 10s fake process, also in another queue. ;)