import { foo } from './bar.js';

window.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  foo();
});
