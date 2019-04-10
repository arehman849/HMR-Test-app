import './example.css';
import iamFromOtherFile from './iamOtherFile';

var example = `<div>
                  <h1>Native JS Hot Module Replacement</h1>
                  <div class="example">
                    this is an example of how hot module replacement can be 
                    integrated with nativeJS (vanilla javascript). 
                    edit contents of this file to see the changes on browser immediately
                  </div>
                </div>`;

const getExample = () => {
  return example + iamFromOtherFile;
}
export default (elem) => {
  elem.innerHTML = getExample();
};

