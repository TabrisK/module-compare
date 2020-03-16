console.log('b starting');
export let done = false;
import * as a from './a';
console.log('in b, a.done = %j', a.done);
// setImmediate(() => { console.log('in b, a.done = %j', a.done); });
done = true;
console.log('b done');