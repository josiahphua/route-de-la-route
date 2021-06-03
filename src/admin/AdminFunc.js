import firebase from "../lib/firebase";
const db = firebase.firestore();

// let routes = [
//     {   
//         id: 1,
//         Color: "Blue",
//         Name: "Devils Trill",
//         Grade: 1,
//         Setter: "Izzu"
//     },
//     {
//         id: 2,
//         Color: "Green",
//         Name: "Achtung!",
//         Grade: 2,
//         Setter: "Izzu"
//     },
//     {
//         id: 3,
//         Color: "Black",
//         Name: "Streak",
//         Grade: 4,
//         Setter: "Izzu"
//     },
//     {
//         id: 4,
//         Color: "Purple",
//         Name: "Judgy",
//         Grade: 3,
//         Setter: "Shaun"
//     },
//     {
//         id: 5,
//         Color: "Black",
//         Name: "Darkness",
//         Grade: 3,
//         Setter: "Shaun"
//     },
//     {
//         id: 6,
//         Color: "Yellow",
//         Name: "Half Past 3",
//         Grade: 4,
//         Setter: "Shaun"
//     },
//     {
//         id: 7,
//         Color: "Green",
//         Name: "Intro T(w)o",
//         Grade: 2,
//         Setter: "Shaun"
//     },
//     {
//         id: 8,
//         Color: "Yellow",
//         Name: "Stand Up",
//         Grade: 3,
//         Setter: "Shaun"
//     },
//     {
//         id: 9,
//         Color: "Blue",
//         Name: "Throw Game",
//         Grade: 6,
//         Setter: "Rubin"
//     },
//     {
//         id: 10,
//         Color: "Pink",
//         Name: "Sandbaggy",
//         Grade: 2,
//         Setter: "Shaun"
//     },
//     {
//         id: 11,
//         Color: "Black",
//         Name: "Ramadance",
//         Grade: 4,
//         Setter: "Feroz"
//     },
//     {
//         id: 12,
//         Color: "Blue",
//         Name: "Blue Valentine",
//         Grade: 1,
//         Setter: "Adi"
//     },
//     {
//         id: 13,
//         Color: "Green",
//         Name: "Green Mile",
//         Grade: 2,
//         Setter: "Adi"
//     },
//     {
//         id: 14,
//         Color: "Orange",
//         Name: "Clockwork Orange",
//         Grade: 3,
//         Setter: "Adi"
//     },
//     {
//         id: 15,
//         Color: "Green",
//         Name: "Jack In The Beanstalk",
//         Grade: 1,
//         Setter: "Chris"
//     },
//     {
//         id: 16,
//         Color: "Black",
//         Name: "Santa In The Chimney",
//         Grade: 2,
//         Setter: "Chris"
//     },
//     {
//         id: 17,
//         Color: "Pink",
//         Name: "Iron Hearts",
//         Grade: 3,
//         Setter: "chris"
//     },
//     {
//         id: 18,
//         Color: "White",
//         Name: "Head Scratcher",
//         Grade: 2,
//         Setter: "Shaun"
//     },
//     {
//         id: 19,
//         Color: "Yellow",
//         Name: "Hollow Yellow",
//         Grade: 3,
//         Setter: "Shaun"
//     },
//     {
//         id: 20,
//         Color: "Purple",
//         Name: "Izzu Says 5",
//         Grade: 4,
//         Setter: "Shaun"
//     },
//     {
//         id: 21,
//         Color: "Green",
//         Name: "Lost In The Forest",
//         Grade: 1,
//         Setter: "Zam"
//     },
//     {
//         id: 22,
//         Color: "Purple",
//         Name: "Girl Crush",
//         Grade: 3,
//         Setter: "Rubin"
//     },
//     {
//         id: 23,
//         Color: "Yellow",
//         Name: "So Meh",
//         Grade: 4,
//         Setter: "Shaun"
//     },
//     {
//         id: 24,
//         Color: "Red",
//         Name: "Check Left",
//         Grade: 3,
//         Setter: "Rubin"
//     },
//     {
//         id: 25,
//         Color: "White",
//         Name: "Cumulonumbus",
//         Grade: 2,
//         Setter: "Lim Chen"
//     },
//     {
//         id: 26,
//         Color: "Purple",
//         Name: "Unfriendly Barney",
//         Grade: 4,
//         Setter: "Feroz"
//     },
//     {
//         id: 27,
//         Color: "Blue",
//         Name: "Breathe",
//         Grade: 4,
//         Setter: "Hilman"
//     },
//     {
//         id: 28,
//         Color: "Black",
//         Name: "Squid Ink",
//         Grade: 5,
//         Setter: "Hilman"
//     },
//     {
//         id: 29,
//         Color: "Yello",
//         Name: "Sunny Day",
//         Grade: 2,
//         Setter: "Zam"
//     },
//     {
//         id: 30,
//         Color: "Red",
//         Name: "Blood Line",
//         Grade: 4,
//         Setter: "Zam"
//     },
//     {
//         id: 31,
//         Color: "White",
//         Name: "Bucket List",
//         Grade: 1,
//         Setter: "Zam"
//     },
//     {
//         id: 32,
//         Color: "Purple",
//         Name: "Hyper",
//         Grade: 2,
//         Setter: "Zam"
//     },
//     {
//         id: 33,
//         Color: "Red",
//         Name: "Twister",
//         Grade: 4,
//         Setter: "Zam"
//     }
// ]

export function addRoutesToFirebase(routeArray){

    routeArray.forEach(el => {
        db.collection('LeadWallFunan').add(el)
    })

}

export function getRoutesFromFirebase(callback){
console.log("hi there");
    db.collection("LeadWallFunan").onSnapshot(querySnapshot => {
        let allRoutes = []
        querySnapshot.forEach(doc => {
            // console.log(doc.id);
            allRoutes.push(doc.data())
        })
        callback(allRoutes)
    })
}


export async function addRouteToFirebase(currentUser, route, callback){
    let temp = {
        ...route,
        Color: route.Color,
        Name: route.Name,
        Attempts: route.Attempts
    }
    
    let res = await (await db.collection('Users').doc(currentUser.uid).get())
    let currentUserData = res.data()
    let attemptedClimbs = currentUserData.attemptedRoutes
    // if(attemptedClimbs.findIndex(route=>route.id === temp.id)){
    //     console.log("Your momma")
        
    // } else {
        
    // }
    attemptedClimbs.push(temp)

    console.log(attemptedClimbs);

    db.collection("Users").doc(currentUser.uid).update({
        "attemptedRoutes": attemptedClimbs
    })
        .then(doc => {
            callback("Succesfully added into database")
        }).catch(e => {
            callback("no yo")
        })

}

export function addUserToFirestore(currentUser, callback){
    
        db.collection("Users").doc(currentUser.uid).set("")
            .then(doc => {
                callback({type: "success", msg:"Route Added"})
            }).catch(e => {
                callback({type: "danger", msg:"Route not Added"})
            })
    }



export function getAttemptsFromFirebase(callback, currentUser){
            db.collection("Users").onSnapshot(querySnapshot => {
                let allAttempts = []
                querySnapshot.forEach(userUID => {
                    // console.log(doc.id);
                    allAttempts.push(userUID.data())
                })
               return callback(allAttempts)
        })
}

