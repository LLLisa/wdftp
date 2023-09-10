const app = require("../api");

const PORT = process.env.PORT || 1312;

const init = () => {
    try {
        app.listen(PORT, () => console.log(`listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

init();
