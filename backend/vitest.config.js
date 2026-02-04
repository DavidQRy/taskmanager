// vitest.config.js
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    // si tienes un archivo de setup en JS
    setupFiles: './test/setup.test.js',
    include: ['**/*.test.js', '**/*.spec.js'],
    exclude: ['node_modules', 'dist'],
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{js}'],
      exclude: [
        '*.config.*',
        '**/server.js',
        'src/app.js',
        'src/models/**',
        'src/dtos/**',
        'src/routes/**',
        'src/config/**',
        'src/types/**',
        'src/generated/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
})
