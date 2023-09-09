const app = require("../api");
const { dbInit } = require("../db");

const PORT = process.env.PORT || 1312;

const init = () => {
    try {
        app.listen(PORT, () => console.log(`listening on port ${PORT}`));
        dbInit();
    } catch (error) {
        console.log(error);
    }
};

init();
