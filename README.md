This App is made for climbers, and friends.
It's main purposes are: 
1) To show all the routes with or without the route names with images to users.
2) To allow users to add edit their attempted routes and display it in a private page for users.
3) To allow admin to have a platform to showcase their gym's routes.



Functions that this app includes:
1) An authentication method which allows users to be created.
2) Displays routes to everyone to see.
3) 


Things to work on and add in:
1) Credit, must give credit to Isaac and Ebere.
2) Add in a button on the routes page asking for users to store attempt. 
   (User must be logged in to view attempts and buttons, otherwise only show route basic info)
3) Above button activates function that runs to db.collection('Users').doc(currentUser.uid).set(attemptedRoute:[]) \
    This function creates user with uid and allows info storage.
4) Add sent checkbox for user to input whether the route has been sent, as attempts doesn't really translate to send. And if sent, then user will not be able to edit attempts unless uncheck sent.
