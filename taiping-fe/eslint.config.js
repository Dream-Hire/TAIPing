// 🔥 안전한 진짜 Airbnb 스타일 ESLint 설정 (에러 수정됨)
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      // 🔥 Airbnb 핵심 JavaScript 규칙들 (안전한 버전)
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off', // TypeScript 버전 사용
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      
      // 🔥 Airbnb 스타일 규칙들
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-before-blocks': 'error',
      'keyword-spacing': 'error',
      'space-infix-ops': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      indent: ['error', 2, { 
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
      }],
      'max-len': ['warn', { 
        code: 100, 
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      
      // 🔥 Airbnb 함수 규칙들
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'as-needed'],
      'no-confusing-arrow': ['error', { allowParens: true }],
      'arrow-body-style': ['error', 'as-needed'],
      
      // 🔥 Airbnb 객체/배열 규칙들
      'object-shorthand': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'no-array-constructor': 'error',
      'array-callback-return': ['error', { allowImplicit: true }],
      'prefer-destructuring': ['error', {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      }, {
        enforceForRenamedProperties: false,
      }],
      
      // 🔥 Airbnb Import 규칙들 (Public 폴더 친화적)
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off', // Public 폴더 때문에 완전 비활성화
      'import/named': 'off', // TypeScript가 처리
      'import/default': 'off', // TypeScript가 처리
      'import/namespace': 'off', // TypeScript가 처리
      'import/no-absolute-path': 'off', // Vite public 폴더를 위해 비활성화
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'off', // Public 경로 때문에 비활성화
      'import/export': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/*.test.{js,jsx,ts,tsx}',
          '**/*.spec.{js,jsx,ts,tsx}',
          '**/test/**/*.{js,jsx,ts,tsx}',
          '**/tests/**/*.{js,jsx,ts,tsx}',
          '**/vite.config.ts',
          '**/eslint.config.js',
        ],
        optionalDependencies: false,
      }],
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],
      'import/order': ['error', {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      }],
      
      // 🔥 TypeScript 규칙들 (안전한 버전)
      '@typescript-eslint/no-unused-vars': ['error', { 
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      
      // 🔥 React Airbnb 규칙들
      'react/react-in-jsx-scope': 'off', // React 18+
      'react/jsx-uses-react': 'off', // React 18+
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/prop-types': 'off', // TypeScript 사용 시
      'react/require-default-props': 'off', // TypeScript 사용 시
      'react/jsx-props-no-spreading': ['warn', {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: ['input', 'textarea'],
      }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-spacing': ['error', 'never'],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { 
        maximum: 1, 
        when: 'multiline' 
      }],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': ['error', {
        allowAllCaps: true,
        ignore: [],
      }],
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }],
      'react/jsx-curly-brace-presence': ['error', {
        props: 'never',
        children: 'never',
      }],
      'react/self-closing-comp': ['error', {
        component: true,
        html: true,
      }],
      'react/no-array-index-key': 'error',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      
      // 🔥 React Hooks 규칙들
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // 🔥 접근성 규칙들 (기본적인 것들)
      'jsx-a11y/alt-text': ['error', {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
      }],
      'jsx-a11y/anchor-has-content': ['error', { components: [] }],
      'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['to'],
      }],
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': ['error', { components: [''] }],
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/label-has-associated-control': ['error', {
        assert: 'either',
        depth: 25,
      }],
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
      'jsx-a11y/no-static-element-interactions': ['warn', {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      }],
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
    },
    settings: {
      react: { 
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  
  // Prettier와 충돌하는 규칙들 비활성화 (마지막에 적용)
  prettier,
  
  {
    ignores: [
      'dist', 
      'build', 
      'node_modules', 
      '*.config.js', 
      '*.config.ts',
      'eslint.config.js',
      'coverage',
      '.nyc_output',
    ],
  },
];