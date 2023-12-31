module.exports = {
    entry: "index.js",

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.md$/i,
                use: "raw-loader",
            },
        ],
    },
};
