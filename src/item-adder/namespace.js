import namespace from './../namespace';

export default (path) => namespace(`ITEM-ADDER${path ? `.${path}` : ''}`);
