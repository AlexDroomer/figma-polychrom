import './style.css';

import { mount } from 'svelte';

import { isEmpty } from '../utils/not-empty.ts';
import App from './components/App.svelte';

const container = document.getElementById('root');

if (isEmpty(container)) {
  // eslint-disable-next-line no-console
  console.error('Failed to find container element for Svelte root');
}
const app = mount(App, { target: container! });

export default app
