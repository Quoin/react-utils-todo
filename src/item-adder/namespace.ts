import namespace from './../namespace';

export default (path?: string) => namespace(`ITEM-ADDER${path ? `.${path}` : ''}`);
