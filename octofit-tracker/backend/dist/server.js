"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = require("./config/database");
const codespaceName = process.env.CODESPACE_NAME?.trim().replace(/\s+/g, '-');
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${app_1.PORT}`;
(0, database_1.connectDatabase)()
    .then(() => {
    app_1.app.listen(app_1.PORT, () => {
        console.log(`Server listening on port ${app_1.PORT}`);
        console.log(`API base URL: ${baseUrl}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
});
