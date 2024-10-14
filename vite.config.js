import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        emptyOutDir: true // Clean the output folder before building
    },
    server: {
        port: 8080
    },
    base: '/timesworld/', // Update with the correct repository name
}