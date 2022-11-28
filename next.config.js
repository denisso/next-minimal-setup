module.exports = {
    images: {
        domains: ["res.cloudinary.com"],
    },

    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: "frontmatter-markdown-loader",
            options: { mode: ["react-component"] },
        });
        return cfg;
    },
};
