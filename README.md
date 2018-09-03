# babel-preset-primavera

Opinionated babel-preset with my favorite [TC39](https://github.com/tc39/proposals) proposals as babel plugins and the @babel/preset-env

Includes
### @babel/plugin-proposal-function-bind
My favorite because allows me a lot of sugar for `.bind()` and I like sweet things:
```js
obj::func
// is equivalent to:
func.bind(obj)

::obj.func
// is equivalent to:
obj.func.bind(obj)

obj::func(val)
// is equivalent to:
func.call(obj, val)

::obj.func(val)
// is equivalent to:
obj.func.call(obj, val)
```
### @babel/plugin-proposal-nullish-coalescing-operator
```js
var foo = object.foo ?? "default";
// is equivalent to:
var _object$foo;

var foo = (_object$foo = object.foo) !== null && _object$foo !== void 0 ? _object$foo : "default";
```
### @babel/plugin-proposal-optional-chaining
```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined

// Optional chaining and normal chaining can be intermixed
obj?.foo.bar?.baz; // Only access `foo` if `obj` exists, and `baz` if
                   // `bar` exists
```
### @babel/plugin-proposal-do-expressions
Mostly I found it useful for JSX, but it plays well in other scenarios as well
```jsx
const Component = props => (
  <div className='myComponent'>
    {do {
      if(color === 'blue') { <BlueComponent/>; }
      else if(color === 'red') { <RedComponent/>; }
      else if(color === 'green') { <GreenComponent/>; }
    }}
  </div>)
;
```
```js
let a = do {
  if(x > 10) {
    'big';
  } else {
    'small';
  }
}```

### @babel/plugin-proposal-logical-assignment-operators
```js
a ||= b;
obj.a.b ||= c;

a &&= b;
obj.a.b &&= c;
// is equivalent to:
a || (a = b);
(_obj$a = obj.a).b || (_obj$a.b = c);

a && (a = b);
(_obj$a2 = obj.a).b && (_obj$a2.b = c);
```
### @babel/plugin-proposal-pipeline-operator
```js
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;
```
### @babel/plugin-proposal-throw-expressions
```js
function test(param = throw new Error('required!')) {
  const test = param === true || throw new Error('Falsey!');
}
```
### @babel/plugin-proposal-export-default-from
```js
export v from 'mod';
```
