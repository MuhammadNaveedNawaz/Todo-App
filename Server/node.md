CRUD => CREATE READ UPDATE DELETE

/=>  read all the notes/task

/=> create (post) => create a note/tasks   

/:uniqueId => read (get) => send the note related to this uniqueId

/:uniqueId => update (post/put/patch) => update the note related to this uniqueId

/:uniqueId => delete (delete) => delete the note related to this uniqueId

react

axion.post()
fetch.post()

<form onSummit={summitForm}></form>
<form action="index.js/php"></form>


HTTP Request Methods

get:Used to retrieve data from server. This method is the most commonly used HTTP method 
and is typically used to fetch information form a server without modifying and data.

POST: Used to send data to the server. This method is typically used to summit information
or to create new record to the server.

Put:Used to Update data to the server. This method is typically used to update an existing
resource on the server.

Patch: same like put but to update partially.

Delete: Used to delete data to the server. This method is typically used to  remove a resource 
from the server.

Put vs Patch

The HTTP PUT and PATCH methods are both used to update resources on a server, but they have 
different meaning and uses.

PUT: the put method is used to update an entire resource on the server.

PATCH: This PATCH method is used to partially update a resource on the server.When you make a
Patch request  to a server, you inly provide the changes you want to the resources,rather  than
providing  the entire representation of the resource. 