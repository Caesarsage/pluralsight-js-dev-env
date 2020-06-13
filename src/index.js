import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger //line where we want the breakpoint to hit
console.log(`I would pa ${courseValue} fpr this awesome course`);