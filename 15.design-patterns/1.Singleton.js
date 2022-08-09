// function DataBase(){
//     console.log("new connection is created")
// }

// var dbCon1 = new DataBase()
// console.log(dbCon1)
// var dbCon2 = new DataBase()
// console.log(dbCon2)
// var dbCon3 = new DataBase()
// console.log(dbCon3)
// var dbCon4 = new DataBase()
// console.log(dbCon4)

var DBconnection = (function(){

    var connection = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log("connection is created")
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    return {
        getConnection: getConnection
    }

})()

var dbCon1 =  DBconnection.getConnection()
console.log(dbCon1)

var dbCon2 =  DBconnection.getConnection()
console.log(dbCon2)

var dbCon3 =  DBconnection.getConnection()
console.log(dbCon3)

var dbCon4 =  DBconnection.getConnection()
console.log(dbCon4)