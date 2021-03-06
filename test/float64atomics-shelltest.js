load("../src/float64atomics.js");

var xx = new SharedInt32Array(Atomics.NUMF64INTS);
var fa = new SharedFloat64Array(10);

Atomics.float64Init(xx, 0);

fa[4] = -2;
assertEq(Atomics.float64Load(fa, 4), -2);

assertEq(Atomics.float64CompareExchange(fa, 4, -2, 7), -2);
assertEq(fa[4], 7);

assertEq(Atomics.float64Store(fa, 4, -10), -10);

assertEq(fa[4], -10);

assertEq(Atomics.float64Add(fa, 4, 20), -10);

assertEq(fa[4], 10);

assertEq(Atomics.float64Sub(fa, 4, 15), 10);

assertEq(fa[4], -5);

fa[4] = -0;
var v = Atomics.float64CompareExchange(fa, 4, 0, 7);
assertEq(fa[4], -0);

print("Done");
