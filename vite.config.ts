import { defineConfig } from 'vite'
import react            from '@vitejs/plugin-react-swc'
import tsPaths          from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [
        tsPaths(),
        react(),
    ],
    server: {
        // https: true,
        port: 10000,
        watch: {
            ignored: [ '/.idea/**', '/src/*.d.ts', '/*.d.ts' ]
        }
    },
} )
