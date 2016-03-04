(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Adder(t,i,e,a){var r=KhanUtil.currentGraph;e=e||0,a=a||0;var n=Math.max(e,a);if(n){for(;t%10===0&&0!==t;)t/=10,e--;for(;i%10===0&&0!==i;)i/=10,a--;a>e?(t*=Math.pow(10,a-e),e=a):e>a&&(i*=Math.pow(10,e-a),a=e),n=e}var l=KhanUtil.digits(t),h=KhanUtil.digits(i),s=l.length-h.length;if(n){for(var o=0;-s>o||l.length<e+1;o++)l.push(0);for(var o=0;s>o||h.length<a+1;o++)h.push(0)}var c={max:Math.max(l.length,h.length,KhanUtil.digits(t+i).length),carry:3,first:2,second:1,sum:0,sideX:Math.max(l.length,h.length)+2,sideY:1.5},g=0,u=0,d=[],m=Adder.numHintsFor(t,i);this.show=function(){if(r.init({range:[[-1,11],[c.sum-.5,c.carry+.5]],scale:[20,40]}),drawDigits(l.slice(0).reverse(),c.max-l.length+1,c.first),drawDigits(h.slice(0).reverse(),c.max-h.length+1,c.second),r.path([[-.5,c.second-.5],[c.max+.5,c.second-.5]]),r.label([0,1],"\\LARGE{+\\vphantom{0}}"),0!==n){for(var t=0;3>t;t++)r.style({fill:"#000"},function(){r.label([c.max-n+.5,t-.1],"\\LARGE{"+decimalPointSymbol+"}","center",!0)});this.showSideLabel("\\text{Make sure digits are lined up by place value.}"),this.showSideLabel("\\text{Use the decimal points to help you.}",-.6)}},this.showHint=function(){if(this.removeHighlights(),g===m-2&&m-1>l.length)return this.showFinalCarry(),void g++;if(g!==m-1){var t,i=u,e="",a="",s="",o=c.max-g,f=Math.pow(10,g-n),v=Math.max(0,n-g);0!==i&&(d.push(r.label([o,c.carry],"\\blue{"+i+"}","below")),e="\\blue{"+KhanUtil.localeToFixed(i*f,v)+"} + "),t=l[g]+u,d=d.concat(drawDigits([l[g]],o,c.first,KhanUtil.BLUE)),g<h.length&&(d=d.concat(drawDigits([h[g]],o,c.second,KhanUtil.BLUE)),s=" + \\blue{"+KhanUtil.localeToFixed(h[g]*f,v)+"}",t+=h[g]),drawDigits([t%10],o,c.sum),d=d.concat(drawDigits([t%10],o,c.sum,KhanUtil.GREEN)),u=Math.floor(t/10);var b=Math.min(u,1);v>b&&(a+="0.",a+=new Array(v-b).join("0")),0!==u&&(d.push(r.label([o-1,c.carry],"\\orange{"+u+"}","below")),a+="\\orange{"+u+"}",1===v&&(a+=".")),a+="\\green{"+t%10+"}",g+1>n&&(a+=new Array(g-n+1).join("0")),this.showSideLabel("\\Large{"+e+"\\blue{"+KhanUtil.localeToFixed(l[g]*f,v)+"}"+s+" = "+a+"}"),g++}},this.showFinalCarry=function(){d.push(r.label([c.max-g,c.carry],"\\blue{"+u+"}","below")),r.label([c.max-g,c.sum],"\\LARGE{"+u+"}"),d.push(r.label([c.max-g,c.sum],"\\LARGE{\\green{"+u+"}}")),this.showSideLabel("\\Large{\\blue{"+u+"} = \\green{"+u+"}}")},this.getNumHints=function(){return m},this.removeHighlights=function(){for(;d.length;)d.pop().remove()},this.showSideLabel=function(t,i){var e=c.sideY+(i||0);d.push(r.label([c.sideX,e],t,"right"))}}function Subtractor(t,i,e,a,r){var n=KhanUtil.currentGraph;e=e||KhanUtil.digits(t),a=a||KhanUtil.digits(i);var l=e.slice(0),h=a.slice(0),s=[],o={max:e.length,carry:3,first:2,second:1,diff:0,sideX:Math.max(e.length,a.length)+2,sideY:1.5},c=0,g=Subtractor.numHintsFor(t,i);r=r||0,this.show=function(){n.init({range:[[-1,11],[o.diff-.5,o.carry+.5]],scale:[20,40]}),drawDigits(e.slice(0).reverse(),o.max-e.length+1,o.first),drawDigits(a.slice(0).reverse(),o.max-a.length+1,o.second),n.path([[-.5,o.second-.5],[o.max+.5,o.second-.5]]),n.label([0,1],"\\LARGE{-\\vphantom{0}}");for(var t=0;t<e.length;t++)s.unshift([])},this.borrow=function(t){var i=t+1;l[t+1]<1&&(i=this.borrow(t+1)),l[t+1]-=1,l[t]+=10;var e=i-t-1;return s[t].push(n.label([o.max-t,o.carry+.5*e],"\\blue{"+l[t]+"}","below")),s[t].push(n.path([[o.max-.3-t,o.first-.4],[o.max+.3-t,o.first+.4]])),s[t+1].push(n.label([o.max-1-t,o.carry+.5*e],"\\orange{"+l[t+1]+"}","below")),s[t+1].push(n.path([[o.max-1.3-t,o.first-.4],[o.max-.7-t,o.first+.4]])),0!==e&&s[t+1].push(n.path([[o.max-1.3-t,o.carry-1+.5*e],[o.max-.7-t,o.carry-.7+.5*e]])),i},this.showHint=function(){if(this.removeHighlights(c),0!==c&&this.removeHighlights(c-1),c!==g-1){var a=l[c],u=c<h.length,d=u?h[c]:0,m="",f=Math.pow(10,c);d>a?this.borrow(c):l[c]===e[c]?s[c].push(n.label([o.max-c,o.first],"\\LARGE{\\blue{"+l[c]+"}}")):s[c].push(n.label([o.max-c,o.carry],"\\blue{"+l[c]+"}","below")),u&&(s[c].push(n.label([o.max-c,o.second],"\\LARGE{\\blue{"+h[c]+"}}")),m=" - \\blue{"+d*f+"}");var v=l[c]-d;((t-i)/Math.pow(10,c)>1||r>c)&&n.label([o.max-c,o.diff],"\\LARGE{"+v+"}");var b=v?new Array(c+1).join("0"):"";s[c].push(n.label([o.max-c,o.diff],"\\LARGE{\\green{"+v+"}}")),""===m&&(m="- \\blue{ 0 }"),this.showSideLabel("\\Large{\\blue{"+l[c]*f+"}"+m+" = \\green{"+v+"}"+b+"}"),c++}},this.getNumHints=function(){return g},this.removeHighlights=function(t){if(!(t>=s.length))for(var i=s[t];i.length;)i.pop().remove()},this.showSideLabel=function(t){s[c].push(n.label([o.sideX,o.sideY],t,"right"))},this.showDecimals=function(t,i){for(var e=0;3>e;e++)n.style({fill:"#000"},function(){n.label([o.max-Math.max(t,i)+.5,e-.1],"\\LARGE{"+decimalPointSymbol+"}","center",!0)});this.showSideLabel("\\text{Make sure the decimals are lined up.}")}}function drawCircles(t,i){var e=KhanUtil.currentGraph,a=Math.floor(Math.sqrt(t)),r=Math.floor(t/a),n=t%r;e.init({range:[[0,a+1],[-1,r+2]],scale:[30,30]}),e.style({stroke:i,fill:i});for(var l=r;l>0;l--)for(var h=a;h>0;h--)e.circle([h,l],.25);for(var h=n;h>0;h--)e.circle([h,0],.25)}function crossOutCircles(t,i,e){var a=KhanUtil.currentGraph,r=Math.floor(Math.sqrt(t)),n=Math.floor(t/r),l=t%n,h=0;a.style({stroke:e,fill:e});for(var s=n;s>0;s--)for(var o=r;o>0;o--)if(a.path([[o-.3,s-.3],[o+.3,s+.3]]),a.path([[o-.3,s+.3],[o+.3,s-.3]]),h+=1,h===i)return;for(var o=l;o>0;o--)if(a.path([[o-.3,s-.3],[o+.3,s+.3]]),a.path([[o-.3,s+.3],[o+.3,s-.3]]),h+=1,h===i)return}function drawDigits(t,i,e,a){var r=KhanUtil.currentGraph,n=[];return $.each(t,function(t,l){var h="\\LARGE{"+l+"}";n.push(r.label([i+t,e],h,{color:a}))}),n}function drawRow(t,i,e,a){var r=KhanUtil.currentGraph;r.style({stroke:e});for(var n=r.raphael.set(),l=0;t>l;l++)n.push(r.label([l,i],"\\small{\\color{"+e+"}{"+(a+l)+"}}")),n.push(r.circle([l,i],.35));return n}function Multiplier(t,i,e,a,r,n){var l=KhanUtil.currentGraph;r=r||0,n=n||0,e=e||KhanUtil.digits(t),a=a||KhanUtil.digits(i);for(var h=KhanUtil.integerToDigits(t*i),s=[],o=0,c=0,g=0,u=Math.max(r+n,h.length),d=0,m=a.length-1;m>0&&0===a[m];m--)d++;var f=e.length*(a.length-d)+1;this.show=function(){var t=Math.max(f-4,3);(r||n)&&(t+=3),l.init({range:[[-2-u,18],[-t,3]],scale:[20,40]}),drawDigits(e.slice(0).reverse(),1-e.length,2),drawDigits(a.slice(0).reverse(),1-a.length,1),l.path([[-1-h.length,.5],[1,.5]]),l.label([-Math.max(e.length,a.length),1],"\\LARGE{\\times\\vphantom{0}}")},this.removeHighlights=function(){for(;s.length;)s.pop().remove()},this.getTrueValue=function(t,i){return t*=Math.pow(10,i),0!==t?KhanUtil.localeToFixed(t,Math.max(0,-i)):t},this.showHint=function(){if(this.removeHighlights(),g===a.length-d)return void this.showFinalAddition();var t=e[c],i=a[g],h=i*t+o,u=h%10,m=Math.floor(h/10);s=s.concat(drawDigits([t],-c,2,KhanUtil.BLUE)),s=s.concat(drawDigits([i],-g,1,KhanUtil.PINK)),o&&(s=s.concat(l.label([-c,3],"\\purple{"+o+"}","below")));var f="\\blue{"+this.getTrueValue(t,c-r)+"}";f+="\\times \\pink{"+this.getTrueValue(i,g-n)+"}",f+=o?"+\\purple{"+this.getTrueValue(o,c+g-r-n)+"}":"",f+="= \\green{"+this.getTrueValue(h,c+g-r-n)+"}",l.label([2,2-g*e.length-c],f,"right");var v=[u];if(0===c)for(var b=0;g>b;b++)v.push(0);drawDigits(v,-g-c,-g),s=s.concat(drawDigits([u],-g-c,-g,KhanUtil.GREEN)),m&&(s=s.concat(l.label([-1-c,3],"\\green{"+m+"}","below")),c===e.length-1&&(drawDigits([m],-g-c-1,-g),s=s.concat(drawDigits([m],-g-c-1,-g,KhanUtil.GREEN)))),o=m,c===e.length-1?(g++,c=0,o=0):c++},this.showFinalAddition=function(){if(a.length-d>1){for(;h.length<r+n+1;)h.unshift(0);var t=d-a.length;l.path([[-1-h.length,t+.5],[1,t+.5]]),l.label([-1-h.length,t+1],"\\LARGE{+\\vphantom{0}}"),drawDigits(h,1-h.length,t)}},this.getNumHints=function(){return f},this.showDecimals=function(){l.style({fill:"#000"},function(){r>0&&l.label([-r+.5,1.9],"\\LARGE{"+decimalPointSymbol+"}","center",!0),n>0&&l.label([-n+.5,.9],"\\LARGE{"+decimalPointSymbol+"}","center",!0)})},this.showDecimalsInProduct=function(){var t=-u,i=-Math.max((a.length-d)*e.length,3+a.length-d);l.label([t,i+2],i18n.ngettext("\\text{The top number has 1 digit to the right of the decimal.}","\\text{The top number has %(num)s digits to the right of the decimal.}",r),"right"),l.label([t,i+1],i18n.ngettext("\\text{The bottom number has 1 digit to the right of the decimal.}","\\text{The bottom number has %(num)s digits to the right of the decimal.}",n),"right"),l.label([t,i],i18n._("\\text{The product has %(numA)s + %(numB)s = %(numSum)s digits to the right of the decimal.}",{numA:r,numB:n,numSum:r+n}),"right"),l.style({fill:"#000"},function(){var t=-a.length+d;-1===t&&(t=0),l.label([-n-r+.5,t-.1],"\\LARGE{"+decimalPointSymbol+"}","center",!0)})}}function Divider(t,i,e,a,r){var n=KhanUtil.currentGraph,l=KhanUtil.integerToDigits(t),h=KhanUtil.integerToDigits(i);e=e||0,a=a||0,a=Divider.processDividend(h,a);var s=e-a,o=Divider.getHints(t,h,e,a,r),c=o.length,g=[],u=[],d=[],m=!1,f=0,v=0,b=0,p=0,w=!0;this.show=function(){for(var t=0,i=0,r=0;r<o.length;r++)"result"===o[r][0]&&0!==o[r][1]?t++:"decimal-remainder"===o[r][0]&&(i=o[r][1]);v=h.length+i+Math.max(0,s)+.5;var c=l;0!==e&&(c=KhanUtil.padDigitsToNum(l.reverse(),e+1).reverse()),n.init({range:[[-1-c.length,17],[-2*t-1,2]],scale:[20,40]}),n.style({fill:"#000"},function(){0!==e&&(d=d.concat(n.label([-1-e,-.1],"\\LARGE{"+decimalPointSymbol+"}","center",!0))),0!==a&&(d=d.concat(n.label([h.length-a-.5,-.1],"\\LARGE{"+decimalPointSymbol+"}","center",!0)))}),drawDigits(c,-.5-c.length,0),drawDigits(h,0,0),n.path([[-.75,-.5],[-.75,.5],[v-.8,.5]])},this.showHint=function(){this.clearArray(g);var t=o.shift();switch(0===o.length&&this.clearArray(u),t[0]){case"shift":this.shiftDecimals();break;case"bring-up-decimal":this.bringUpDecimal();break;case"division":p=t[1],this.showDivisionStep();break;case"result":this.showDivisionStepResult(t[1],t[2],t[3]);break;case"decimal-remainder":this.addDecimalRemainder();break;case"remainder":this.showRemainder(t[1])}},this.shiftDecimals=function(){if(this.clearArray(d),m=n.label([v,1],i18n.ngettext("\\text{Shift the decimal 1 to the right.}","\\text{Shift the decimal %(num)s to the right.}",e),"right"),this.addDecimals([[-1,-.1],[h.length+s-.5,-.1]]),s>0){h=KhanUtil.padDigitsToNum(h,h.length+s);var t=h.length-s,i=h.slice(t);drawDigits(i,t,0),g=g.concat(drawDigits(i,t,0,KhanUtil.PINK))}},this.bringUpDecimal=function(){m&&(m.remove(),m=!1),n.label([v,1.2],i18n._("\\text{Bring the decimal up into the}"),"right"),n.label([v,.8],i18n._("\\text{answer (the quotient).}"),"right"),this.addDecimals([[h.length+s-.5,.9]])},this.showDivisionStep=function(i){var e=i18n._("\\text{How many times does }%(divisor)s\\text{ go into }\\color{#6495ED}{%(value)s}\\text{?}",{divisor:t,value:p});p>=t?n.label([v,b],e,"right"):g=g.concat(n.label([v,b],e,"right")),w||(n.style({arrows:"->"},function(){g.push(n.path([[f,-.5],[f,b+.5]]))}),h[f]?drawDigits([h[f]],f,b):(drawDigits([0],f,0),drawDigits([0],f,b)));var a=KhanUtil.integerToDigits(p);g=g.concat(drawDigits(a,f-a.length+1,b,KhanUtil.BLUE))},this.showDivisionStepResult=function(i,e){if(0!==i&&(w=!1),w&&f<h.length+s-1?u=u.concat(drawDigits([0],f,1)):drawDigits([i],f,1),g=g.concat(drawDigits([i],f,1,KhanUtil.GREEN)),0!==i){b-=2;var a=KhanUtil.integerToDigits(i*t),r=a.length;drawDigits(a,f-r+1,b+1),n.path([[f-r-.25,b+.5],[f+.5,b+.5]]),n.label([f-r,b+1],"-");var l=KhanUtil.integerToDigits(e),o=f-l.length+1;drawDigits(l,o,b),g=g.concat(drawDigits(l,o,b,KhanUtil.PINK)),n.label([v,b+1],"\\blue{"+p+"}\\div"+t+"=\\green{"+i+"}\\text{"+i18n._(" with a remainder of ")+" }\\pink{"+e+"}","right")}f++},this.addDecimalRemainder=function(){h=KhanUtil.integerToDigits(10*i),a=1,s=e-a,drawDigits([0],f,0),this.addDecimals([[f-.5,.9],[f-.5,-.1]]),n.label([v,1],i18n._("\\text{Write in a decimal and a zero.}"),"right")},this.showRemainder=function(i){var e;0===i?e="\\text{"+i18n._("The remainder is 0, so we have our answer.")+"}":(e=i18n._("\\text{Since } %(remainder)s \\text{ is less than } %(divisor)s \\text{, it is left as our remainder.}",{remainder:i,divisor:t}),drawDigits(["\\text{R}"].concat(KhanUtil.integerToDigits(i)),h.length,1)),n.label([v,b],e,"right")},this.getNumHints=function(){return c},this.clearArray=function(t){for(;t.length;)t.pop().remove()},this.addDecimals=function(t){n.style({fill:"#000"},function(){for(var i=0;i<t.length;i++)n.label(t[i],"\\LARGE{"+decimalPointSymbol+"}","center",!0)})}}var decimalPointSymbol=icu.getDecimalFormatSymbols().decimal_separator;Adder.processDigit=function(){},Adder.numHintsFor=function(t,i){return KhanUtil.digits(t+i).length+1},Subtractor.numHintsFor=function(t,i){return KhanUtil.digits(t).length+1},function(){var t=function(t){var i=function(t,i,e,a){var r=t*(a>i?Math.pow(10,a-i):1),n=e*(i>a?Math.pow(10,i-a):1);return[r,n]},e=function(e,a,r,n){for(var l=i(e,a,r,n),h=l[0],s=l[1],o=KhanUtil.digits(h),c=0;a-n>c||o.length<a+1;c++)o.push(0);for(var g=KhanUtil.digits(s),c=0;n-a>c||g.length<n+1;c++)g.push(0);var u=new t(h,s,o,g,Math.max(a,n));return u.showDecimals=function(t){return function(){t.call(u,a,n)}}(u.showDecimals),u};return e.numHintsFor=function(e,a,r,n){var l=i(e,a,r,n),h=l[0],s=l[1];return t.numHintsFor(h,s)},e};KhanUtil.DecimalAdder=t(Adder),KhanUtil.DecimalSubtractor=t(Subtractor)}(),Divider.getHints=function(t,i,e,a,r){var n=[],l=0;e>0&&(n.push(["shift"]),e>a&&(i=KhanUtil.padDigitsToNum(i,i.length+e-a))),a>e&&n.push(["bring-up-decimal"]);for(var h=i.length+(r?5:0),s=KhanUtil.padDigitsToNum(i,h),o=0,c=["decimal-remainder",0],g=0;g<s.length;g++){if(g>=i.length){if(0===l)break;o++,g===i.length&&n.push(c)}o>0&&(c[1]=o),l=10*l+s[g],n.push(["division",l]);var u=Math.floor(l/t),d=t*u;l-=d,n.push(["result",u,l])}return(0===l||5!==o)&&n.push(["remainder",l]),n},Divider.getNumberOfHints=function(t,i,e,a,r){var n=KhanUtil.integerToDigits(i);a=Divider.processDividend(n,a);var l=Divider.getHints(t,n,e,a,r);return l.length},Divider.processDividend=function(t,i){for(var e=t.length-1,a=0;i>a&&0===t[e-a];a++)t.splice(e-a),i--;for(var r=i-t.length+1,a=0;r>a;a++)t.splice(0,0,0);return i},KhanUtil.Adder=Adder,KhanUtil.Subtractor=Subtractor,KhanUtil.Multiplier=Multiplier,KhanUtil.Divider=Divider,KhanUtil.drawCircles=drawCircles,KhanUtil.drawDigits=drawDigits,KhanUtil.drawRow=drawRow,KhanUtil.crossOutCircles=crossOutCircles;
},{}]},{},[1]);
