## Using: 
 - [x] Typescript, 
 - [x] React, 
 - [ ] React Router, 
 - [x] Material UI
 - [ ] Redux
## Create a Todo List App with the following requirements:
 - [x] There should be a login screen (with hardcoded username and password)
 - [ ] There should be a logout button in the App
 - [ ] No route, except the login screen route should be accessible if user is not logged in
 - [ ] User should be able to create, edit and remove Todos
### Todo's attributes:
 - [x] ID (number, unique in scope of Todos, auto generated, not editable after creation, required)
 - [x] title (required)
 - [x] status (todo or done, required)
 - [x] Category reference (required)
 - [x] Assignee reference (Contact - see below, required)
### User should be able to create, edit and remove Categories
 - Category attributes:
   - [x] ID (number, unique in scope of Categories, auto generated, not editable after creation, required)
   - [x] color (from predefined colors list, required)
   - [x] name (required)
### User should be able to create, edit and remove Contacts
 - Contact attributes:
 	- [x] ID (number, unique in scope of Contacts, auto generated, not editable after creation, required)
 	- [x] name (required)
 	- [ ] email (required, with simple validation for proper format)
### User should be able to display a List of all Todos with all their attributes
 - List should be filterable by all attributes of Todo:
  	- title -> simple text search
  	- status -> single predefined value search
  	- category and assignee references -> single reference search
 - There should be an option to clear all filters
 - List should be paginated using 10 items per page, simple pagination controls should be available to the user
 - Filters and pagination state should be saved/restored between page visits
 - There should be a button/checkbox/other solution to mark a single todo as done on the List next to each of the Todos
 - Each Todo should have a visual indication of the category color
 - Creating and editing of Todos should be done on a screen separate from the List screen, to which appropriate buttons should navigate
### User should be able to display a List of all Categories with all their attributes
 - This list does not have to be paginated, nor any filters, nor sorting are required
 - The creation and editing of the Categories should be done "in place" inside the list (not on separate screen)
### User should be able to display a List of all Contacts with all their attributes
 - This list does not have to be paginated, nor any filters, nor sorting are required
 - The creation and editing of the Contact should be done "in place" inside the list (not on separate screen)
### Other requirements:
 - [x] The App should be aesthetically pleasing, use Material UI package
 - [ ] Data stored in Redux should be automatically saved/restored to/from browser Local Storage
 - [ ] Data in Redux should be stored in 3rd normal form
