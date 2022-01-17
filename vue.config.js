module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .tap((options) => ({
                ...options,
                compilerOptions: {
                    ...options.compilerOptions,
                    // treat any tag that starts with uni- as custom elements
                    isCustomElement: (tag) => tag.startsWith("uni-"),
                },
            }));
    },
};
