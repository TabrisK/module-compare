console.log('a starting');
export let done = false;
import * as b from './b';
console.log('in a, b.done = %j', b.done);
done = true;
console.log('a done');