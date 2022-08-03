/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
    ssr: false,
    target: 'static',
    head: {
        title: 'GRDI',
        meta: [{
            charset: "utf-8"
        }]
    },
    loading: false,
    plugins: [{
            ssr: false,
            src: '@/plugins/icons.js'
        },
        {
            src: '@/plugins/baklava.js',
            mode: 'client',
            ssr: false,
        },
        {
            src: "@/plugins/fontawesome.js",
            mode: "client",
            ssr: false
        },
        {
            src: "@/plugins/eventBus.js",
            mode: "client",
            ssr: false
        }
    ],
    buildModules: [
        '@nuxt/typescript-build',
    ],
    modules: [
        '@nuxtjs/vuetify',
    ],
    vuetify: {
        theme: {
            themes: {
                light: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FFC107',
                },
            },
        }
    },
    build: {
        babel: {
            plugins: [
                ['@babel/plugin-proposal-private-methods', {
                    loose: true
                }]
            ]
        }
    }
};
