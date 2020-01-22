import namespace from './../namespace';

export default (path?: string) => namespace(`APP${path ? `.${path}` : ''}`);
