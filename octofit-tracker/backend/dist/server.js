"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = require("./config/database");
(0, database_1.connectDatabase)()
    .then(() => {
    app_1.app.listen(app_1.PORT, () => {
        console.log(`Server listening on port ${app_1.PORT}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
});
