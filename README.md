Snapshot Testing

After i run npm test  this error comes 


> testing_react@0.1.0 test /home/mike/Documents/All about React/Practice React/testing_react
> jest --config ./jest.config.json

 FAIL  src/App.spec.js
  ● Test suite failed to run

    SyntaxError: /home/mike/Documents/All about React/Practice React/testing_react/src/App.spec.js: Support for the experimental syntax 'jsx' isn't currently enabled (7:37):

       5 | describe('Snapshot baby',() => {
       6 |     test("Test 1",() => {
    >  7 |         let tree =  renderer.create(<Counter counter={1}/>).toJSON();
         |                                     ^
       8 |         expect(tree).toMatchSnapshot();
       9 |     })
      10 | })

    Add @babel/plugin-transform-react-jsx (https://git.io/vb4yd) to the 'plugins' section of your Babel config to enable transformation.

      at Parser._raise (node_modules/@babel/parser/src/parser/error.js:60:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/error.js:55:17)
      at Parser.expectOnePlugin (node_modules/@babel/parser/src/parser/util.js:157:18)
      at Parser.parseExprAtom (node_modules/@babel/parser/src/parser/expression.js:1180:18)
      at Parser.parseExprSubscripts (node_modules/@babel/parser/src/parser/expression.js:563:23)
      at Parser.parseUpdate (node_modules/@babel/parser/src/parser/expression.js:543:21)
      at Parser.parseMaybeUnary (node_modules/@babel/parser/src/parser/expression.js:527:17)
      at Parser.parseExprOps (node_modules/@babel/parser/src/parser/expression.js:343:23)
      at Parser.parseMaybeConditional (node_modules/@babel/parser/src/parser/expression.js:308:23)
      at Parser.parseMaybeAssign (node_modules/@babel/parser/src/parser/expression.js:263:21)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.11s
Ran all test suites.
npm ERR! Test failed.  See above for more details.

