const test = require('tape')

const crocks = require('./crocks')

const applyTo       = require('./combinators/applyTo')
const composeB      = require('./combinators/composeB')
const constant      = require('./combinators/constant')
const flip          = require('./combinators/flip')
const identity      = require('./combinators/identity')
const reverseApply  = require('./combinators/reverseApply')
const substitution  = require('./combinators/substitution')

const compose     = require('./funcs/compose')
const curry       = require('./funcs/curry')
const liftA       = require('./funcs/liftA')
const liftA2      = require('./funcs/liftA2')
const liftA3      = require('./funcs/liftA3')
const mconcat     = require('./funcs/mconcat')
const mconcatMap  = require('./funcs/mconcatMap')

const map     = require('./pointfree/map')
const ap      = require('./pointfree/ap')
const chain   = require('./pointfree/chain')
const concat  = require('./pointfree/concat')

const maybe = require('./pointfree/maybe')
const run   = require('./pointfree/run')
const value = require('./pointfree/value')

const Maybe     = require('./crocks/Maybe')
const Identity  = require('./crocks/Identity')
const IO        = require('./crocks/IO')

const All     = require('./monoids/All')
const Any     = require('./monoids/Any')
const Assign  = require('./monoids/Assign')
const Compose = require('./monoids/Compose')
const Flip    = require('./monoids/Flip')
const Prod    = require('./monoids/Prod')
const Sum     = require('./monoids/Sum')

test('entry', t => {
  t.equal(crocks.toString(), '[object Object]', 'is an object')

  t.equal(crocks.applyTo, applyTo, 'provides the A combinator')
  t.equal(crocks.composeB, composeB, 'provides the B combinator')
  t.equal(crocks.constant, constant, 'provides the K combinator')
  t.equal(crocks.flip, flip, 'provides the C combinator')
  t.equal(crocks.identity, identity, 'provides the I combinator')
  t.equal(crocks.reverseApply, reverseApply, 'provides the T combinator')
  t.equal(crocks.substitution, substitution, 'provides the S combinator')

  t.equal(crocks.compose, compose, 'provides the compose function')
  t.equal(crocks.curry, curry, 'provides the curry function')
  t.equal(crocks.liftA, liftA, 'provides the liftA function')
  t.equal(crocks.liftA2, liftA2, 'provides the liftA2 function')
  t.equal(crocks.liftA3, liftA3, 'provides the liftA3 function')
  t.equal(crocks.mconcat, mconcat, 'provides the mconcat function')
  t.equal(crocks.mconcatMap, mconcatMap, 'provides the mconcatMap function')

  t.equal(crocks.map, map, 'provides the map point-free function')
  t.equal(crocks.ap, ap, 'provides the ap point-free function')
  t.equal(crocks.chain, chain, 'provides the chain point-free function')
  t.equal(crocks.concat, concat, 'provides the concat point-free function')

  t.equal(crocks.maybe, maybe, 'provides the maybe point-free function')
  t.equal(crocks.value, value, 'provides the value point-free function')
  t.equal(crocks.run, run, 'provides the run point-free function')

  t.equal(crocks.Maybe, Maybe, 'provides the Maybe function')
  t.equal(crocks.Identity, Identity, 'provides the Identity function')
  t.equal(crocks.IO, IO, 'provides the IO function')

  t.equal(crocks.All, All, 'provides the All monoid')
  t.equal(crocks.Any, Any, 'provides the Any monoid')
  t.equal(crocks.Assign, Assign, 'provides the Assign monoid')
  t.equal(crocks.Compose, Compose, 'provides the Compose monoid')
  t.equal(crocks.Flip, Flip, 'provides the Flip monoid')
  t.equal(crocks.Prod, Prod, 'provides the Prod monoid')
  t.equal(crocks.Sum, Sum, 'provides the Sum monoid')

  t.end()
})
