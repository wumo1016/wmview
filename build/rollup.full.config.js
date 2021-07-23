import typescript from 'rollup-plugin-typescript2'
import path from 'path'
import vue from 'rollup-plugin-vue'

export default {
  input: path.resolve(__dirname, `../packages/wmview/index.ts`),
  output: {
    format: 'es',
    file: 'dist/index.esm.js',
  },
  plugins: [
    vue({
      target: 'browser',
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: { // 不生产声明文件
          declaration: false,
        },
        exclude: ['node_modules'],
      },
    }),
  ],
  // 排除vue本身不打包
  external(id) {
    return /^vue/.test(id)
  },
}
