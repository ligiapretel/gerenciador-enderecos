const {User} = require("../database/models");

async function test(){
    const user = await User.findByPk(
        2,
        {
            include: "addresses",
        })
        console.log(user.toJSON());
};

test();