import { mount } from 'svelte';

import { notEmpty } from '../utils/not-empty';
import App from './components/App.svelte';
import './style.css';

const container = document.getElementById('root');

if (!notEmpty(container)) {
  console.error('Failed to find container element for Svelte root');
}

const app = mount(App, {

  target: container!,
});

export default app;
