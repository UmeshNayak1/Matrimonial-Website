// /* Models */
// var {
//     Recommendation
// } = require("../models/recommendation");
// var Users = require("../models/users");

// exports.getRecommendationUser = async function (req, res) {
//     var respond_data = new Object();

//     await Recommendation.findOne({
//         user: req.session._id
//     }).then((result) => {

//         respond_data.minage = result.minage;
//         respond_data.maxage = result.maxage;

//         respond_data.religion = (result.religion.reduce(function (prev, current) {
//             return (prev.count > current.count) ? prev : current
//         })).name;

//         respond_data.education = (result.education.reduce(function (prev, current) {
//             return (prev.count > current.count) ? prev : current
//         })).name;

//         let query = {};

//         if (respond_data.religion) {
//             query["religion"] = respond_data.religion;
//         }
//         if (respond_data.minage && respond_data.maxage) {
//             query["age"] = {
//                 $gt: parseInt(respond_data.minage),
//                 $lt: parseInt(respond_data.maxage)
//             };
//         }
//         if (respond_data.education) {
//             query["education"] = respond_data.education;
//         }

//         let query1 = {}
//         query1["gender"] = req.session.gender == "Male" ? "Male" : "Female";

//         Users.find(query1).populate({
//             path: "personaldetails",
//             model: "personaldetails",
//             match: query
//         }).then((result1) => {
//             result1 = result1.filter(function (r) {
//                 return r.personaldetails != null;
//             })
//             res.send(result1);
//         }).catch((err) => {
//             console.log(err);
//             throw err;
//         })
//     }).catch((err) => {
//         console.log(err);
//         throw err;
//     })
// }


// /* Models */
// var { Recommendation } = require("../models/recommendation");
// var Users = require("../models/users");

// exports.getRecommendationUser = async function (req, res) {
//     var respond_data = {};

//     try {
//         const result = await Recommendation.findOne({
//             user: req.session._id
//         });

//         if (!result) {
//             res.status(404).send('No recommendations found');
//             return;
//         }

//         respond_data.minage = result.minage;
//         respond_data.maxage = result.maxage;

//         // Ensure result.religion is an array and not empty
//         if (result.religion && result.religion.length > 0) {
//             respond_data.religion = (result.religion.reduce(function (prev, current) {
//                 return (prev.count > current.count) ? prev : current;
//             })).name;
//         } else {
//             respond_data.religion = null;
//         }

//         // Ensure result.education is an array and not empty
//         if (result.education && result.education.length > 0) {
//             respond_data.education = (result.education.reduce(function (prev, current) {
//                 return (prev.count > current.count) ? prev : current;
//             })).name;
//         } else {
//             respond_data.education = null;
//         }

//         let query = {};

//         if (respond_data.religion) {
//             query["religion"] = respond_data.religion;
//         }
//         if (respond_data.minage && respond_data.maxage) {
//             query["age"] = {
//                 $gt: parseInt(respond_data.minage),
//                 $lt: parseInt(respond_data.maxage)
//             };
//         }
//         if (respond_data.education) {
//             query["education"] = respond_data.education;
//         }

//         let query1 = {};
//         query1["gender"] = req.session.gender == "Male" ? "Female" : "Male";

//         const result1 = await Users.find(query1).populate({
//             path: "personaldetails",
//             model: "personaldetails",
//             match: query
//         });

//         const filteredResult = result1.filter(function (r) {
//             return r.personaldetails != null;
//         });

//         res.send(filteredResult);

//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server error');
//     }
// };



/* Models */
var { Recommendation } = require("../models/recommendation");
var Users = require("../models/users");

exports.getRecommendationUser = async function (req, res) {
    var respond_data = {};

    try {
        const result = await Recommendation.findOne({
            user: req.session._id
        });

        if (!result) {
            res.status(404).send('No recommendations found');
            return;
        }

        respond_data.minage = result.minage;
        respond_data.maxage = result.maxage;

        // Ensure result.religion is an array and not empty
        if (result.religion && result.religion.length > 0) {
            respond_data.religion = (result.religion.reduce(function (prev, current) {
                return (prev.count > current.count) ? prev : current;
            })).name;
        } else {
            respond_data.religion = null;
        }

        // Ensure result.education is an array and not empty
        if (result.education && result.education.length > 0) {
            respond_data.education = (result.education.reduce(function (prev, current) {
                return (prev.count > current.count) ? prev : current;
            })).name;
        } else {
            respond_data.education = null;
        }

        let query = {};

        if (respond_data.religion) {
            query["religion"] = respond_data.religion;
        }
        if (respond_data.minage && respond_data.maxage) {
            query["age"] = {
                $gt: parseInt(respond_data.minage),
                $lt: parseInt(respond_data.maxage)
            };
        }
        if (respond_data.education) {
            query["education"] = respond_data.education;
        }

        let query1 = {};

        // Ensure gender preference filters for opposite gender
        query1["gender"] = req.session.gender == "Male" ? "Male" : "Female";

        const result1 = await Users.find(query1).populate({
            path: "personaldetails",
            model: "personaldetails",
            match: query
        });

        const filteredResult = result1.filter(function (r) {
            return r.personaldetails != null;
        });

        res.send(filteredResult);

    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};


