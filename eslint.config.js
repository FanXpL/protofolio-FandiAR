import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])


// Lightweight tap feedback: one delegated listener, no animation library.
(() => {
  const addTap = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    const target = e.target && e.target.closest
      ? e.target.closest('button, a, [role="button"], input[type="button"], input[type="submit"]')
      : null;
    if (!target) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const r = document.createElement('span');
    r.className = 'tap-feedback';
    r.style.left = `${e.clientX}px`;
    r.style.top = `${e.clientY}px`;
    document.body.appendChild(r);
    r.addEventListener('animationend', () => r.remove(), { once: true });
  };

  document.addEventListener('pointerdown', addTap, { passive: true });
})();

