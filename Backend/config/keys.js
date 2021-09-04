if (process.env.NODE_ENV === "production") {
    console.log("**********Starting Server in Production Mode********")
    module.exports = require("./keys_prod");
} else {
    console.log("***********Starting Server in Development Mode*********")
    module.exports = require("./keys_dev");
}
