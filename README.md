# JsendEmberSerializer
Simple Jsend format json serializer

[Jsend](http://labs.omniti.com/labs/jsend) is a simple JSON spec.

Messages are usually like this:

    {
    status : "success",
    data : {
        "post" : { "id" : 1, "title" : "A blog post", "body" : "Some useful content" }
        }
    }

Ember likes messages like this:

    {
        "post" : { "id" : 1, "title" : "A blog post", "body" : "Some useful content" }
    }

Nuff said. Barely worth a repo.

Written for ember-cli. Put it in app/serializers.


    

    
