module.exports = {
    apps: [
        {
            name: "Angel",
            script: "./src/index.js",
            env: {
                DB_STRING: "",
                PORT: 8080,
                TELEGRAM_API: "",
            },
        },
    ],
};
