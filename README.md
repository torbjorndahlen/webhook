# 3scale Webhook NodeJS app

This is a REST API to use as a callback for 3scale webhooks. 

# Hello World API

# hello [/hello]

'Hello world' endpoint.

## hello [POST] 

'Hello world' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "world"
            }

+ Response 200 (application/json)
    + Body
            {
              "msg": "Hello world"
            }


## hello [GET]
'Hello world' endpoint.
+ Parameters:
    - in: query
      name: hello
      schema:
      type: string
      description: Say hello to
    - in: query
      name: user_key
      schema:
      type: string
      description: Authorization to 3scale