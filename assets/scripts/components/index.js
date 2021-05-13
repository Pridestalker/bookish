export default [
    {
        target: '[data-component="hero-banner"]',
        file: async () => (
            await import(/* webpackChunkName: "scripts/components/hero/banner" */ './hero-banner')).default,
    },
]
