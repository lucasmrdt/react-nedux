import nodeResolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import {
  terser
} from 'rollup-plugin-terser'

import pkg from './package.json'

const extensions = ['.ts']
const noDeclarationFiles = {
  compilerOptions: {
    declaration: false
  }
}

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/react-nedux.js',
      format: 'cjs',
      indent: false
    },
    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ]),
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({
        useTsconfigDeclarationDir: true
      }),
      babel({
        extensions,
        plugins: ['@babel/plugin-proposal-optional-chaining'],
        runtimeHelpers: true
      })
    ]
  },

  // ES
  {
    input: 'src/index.ts',
    output: {
      file: 'es/react-nedux.js',
      format: 'es',
      indent: false
    },
    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ]),
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({
        tsconfigOverride: noDeclarationFiles
      }),
      babel({
        extensions,
        plugins: ['@babel/plugin-proposal-optional-chaining'],
        runtimeHelpers: true
      })
    ]
  },

  // ES for Browsers
  {
    input: 'src/index.ts',
    output: {
      file: 'es/react-nedux.mjs',
      format: 'es',
      indent: false
    },
    plugins: [
      nodeResolve({
        extensions
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      typescript({
        tsconfigOverride: noDeclarationFiles
      }),
      babel({
        extensions,
        plugins: ['@babel/plugin-proposal-optional-chaining'],
        exclude: 'node_modules/**'
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  },

  // UMD Development
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/react-nedux.js',
      format: 'umd',
      name: 'React-Nedux',
      indent: false
    },
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({
        tsconfigOverride: noDeclarationFiles
      }),
      babel({
        extensions,
        plugins: ['@babel/plugin-proposal-optional-chaining'],
        exclude: 'node_modules/**'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },

  // UMD Production
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/react-nedux.min.js',
      format: 'umd',
      name: 'React-Nedux',
      indent: false
    },
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({
        tsconfigOverride: noDeclarationFiles
      }),
      babel({
        extensions,
        plugins: ['@babel/plugin-proposal-optional-chaining'],
        exclude: 'node_modules/**'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
]