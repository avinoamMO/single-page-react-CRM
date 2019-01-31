const express = require("express")
const request = require('request');
const router = express.Router()
let Client = require("../models/Client")


// console.log(Client.find({}))

router.get("/sanity", function (req, res) 
    {
        res.send("OK")
    });

router.get("/client/:clientID", function (req, response) 
    {
        Client.find({_id :req.params.clientID}).exec(function(err,userDetails)
        {
            response.send(userDetails)
        })                
    });

router.get("/clients/", function (req, response) 
{
    Client.find({}).exec(function(err,whatWeFound)
            {
                response.send(whatWeFound)
            })    
            
});

router.get("/hottestcountry/", function (req, response) 
{
    Client.aggregate([
        {
            $group: {
                _id: '$country',
                count: {$sum: 1}
            }
        }, 
        {
            "$sort": {count: -1}
        },
        {"$limit": 1}

    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            response.send(result);
        }
    });                 
});

router.get("/topemployees/", function (req, response) 
{
    Client.aggregate([
        {
            $group: {
                _id: '$owner',
                count: {$sum: 1}
            }
        }, 
        {
            "$sort": {count: -1}
        },
        {"$limit": 5}

    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            response.send(result);
        }
    });                 
});
router.get("/topsalesbycountry/", function (req, response) 
{
    Client.aggregate([
        {
            $group: {
                _id: '$country',
                count: {$sum: 1}
            }
        }, 
        {
            "$sort": {count: -1}
        },
        {"$limit": 5}

    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            response.send(result);
        }
    });                 
});

router.get("/emailssent/", function (req, response) 
{
    Client.aggregate([
        {
            $group: {
                _id: '$emailType',
                count: {$sum: 1}
            }
        }, 
        {
            "$sort": {count: -1}
        }
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            response.send(result);
        }
    });
            
});

router.get("/outstandingclients/", function (req, response) 
{
    Client.aggregate([
        {
            $group: {
                _id: '$sold',
                count: {$sum: -1}
            }
        }, 
        {
            "$sort": {count: -1}
        },
        {"$limit": 1}

    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            response.send(result);
        }
    });
            
});

router.get("/newmonthclients/", async function (req, response) 
{

   let temp = await Client.aggregate(
        [
            {
                $group: {
                    _id: { year: {"$year": "$firstContact" },
                    month: {"$month": "$firstContact" }},
                    count: {$sum: 1}
                }
            }
         
        ]).sort({"_id.year" : -1, "_id.month" : -1});

        response.send(temp);
});

router.get("/salessince30days/", async function (req, response) 
{

   let temp = await Client.aggregate(
        [
            { $match : { sold : true } },
            {
                $group: {
                    _id: { year: {$year: "$firstContact" },
                    month: {$month: "$firstContact" },
                    day: {$dayOfMonth: "$firstContact" }},
                    count: {$sum: 1}
                }
            }
         
        ]).sort({"_id.year" : -1, "_id.month" : -1, "_id.day" : -1}).limit(30);

        response.send(temp);
});

router.get("/clientacquisition/", async function (req, response) 
{
    let temp = await Client.aggregate(
        [
            {
                $group: {
                    _id: { year: {"$year": "$firstContact" },
                    month: {"$month": "$firstContact" }},
                    count: {$sum: 1}
                }
            }
         
        ]).sort({"_id.year" : -1, "_id.month" : -1}).limit(12);


        response.send([{name : "currentMonth", value: temp[0].count}, 
                       {name: "lastSixMonths", value: temp[1].count+temp[2].count+temp[3].count+temp[4].count+temp[5].count},
                       {name: "lastYear", value: temp[6].count+temp[7].count+temp[8].count+temp[9].count+temp[10].count+temp[11].count}]);
});

router.post("/client/:clientID", function (req, response) 
    {   
        Client.findOneAndUpdate({ _id: req.body.newUser.id }, { $set: { "name": req.body.newUser.name, "country" :req.body.newUser.country } }, { new: true }, function(err, doc) {
            // Book.findOneAndUpdate({ "_id": bookId }, { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}).exec(function(err, book){

        });
        
        response.send(req.body) 
            console.log("router.post/client/ accessed.")
            console.log(req.body)
            response.end();
    })

    router.put("/client/:clientName",function(req,response)
    {
        response.send("client PUT route")
        response.end();
    })

router.delete("/client/:clientName", function (req, response) 
{
        // City.findOneAndDelete({name:req.params.cityName},function(){})
        console.log("client delete route accessed")
        response.end();
    })
// router.get("/cities/", function (req, response) 
//     {
         
//         City.find({}).exec(function(err,whatWeFound)
//             {
//                 response.send(whatWeFound)
//             })
            
//     });      

module.exports = router
