import { Body as n } from "caido:utils";
/** 
 *  @preserve
 *  Bundle of 'starterkit-workflow'
 *  Generated: 2024-07-02T18:23:44.254Z
 *  Version: 0.1.0
**/
function t() {
  console.log("I am a test function");
}
async function r(e, o) {
  return t(), o.console.log(new n("test")), "Hello, World!";
}
export {
  r as run
};
