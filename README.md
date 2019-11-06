Sample API for Education about NodeJS
- Concept
	- Register
		- receive information from body
	- Login
		- receive parameter from url field : email, password and key
		- all of parameter is base64
		- key field is random between ep and pe
		- return code
	- Update Profile
		- receive parameter from url field : userId
		- receive information from body
	- Remove User
	- get lat and long 

** when send parameter, must encode with base64.
*** when send parameter more than one parameter, must send key parameter at last index of url and random it.
	example (**)
		- localhost:3000/authentication/aGFyaWx1azAwQGdtYWlsLmNvbQ==/aW5pdEAxMjM0/ZXA=
			- ZXA= is key (when decode is ep)
			- aGFyaWx1azAwQGdtYWlsLmNvbQ== is email (e) (when decode hariluk00@gmail.com)
			- aW5pdEAxMjM0 is password (p) (when decode init@1234)
	example (***)
		- localhost:3000/authentication/param1/param2/ep
			- param1 is email (e)
			- param2 is password (p)
		- localhost:3000/authentication/param1/param2/pe
			- param1 is password (p)
			- param2 is email (e)