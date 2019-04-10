import example from './example/example';
import './index.css';

let main = document.querySelector('main');

example(main);

if (module.hot) {
    module.hot.accept();
}
