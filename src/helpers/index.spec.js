const test = require('tape')

const index = require('.')

const assign = require('./assign')
const assoc = require('./assoc')
const binary = require('./binary')
const branch = require('../Pair/branch')
const compose = require('./compose')
const composeK = require('./composeK')
const composeP = require('./composeP')
const composeS = require('./composeS')
const curry = require('./curry')
const defaultProps  = require('./defaultProps')
const defaultTo  = require('./defaultTo')
const dissoc = require('./dissoc')
const fanout = require('./fanout')
const find = require('../Maybe/find')
const fromPairs = require('./fromPairs')
const liftA2 = require('./liftA2')
const liftA3 = require('./liftA3')
const liftN = require('./liftN')
const mapProps = require('./mapProps')
const mapReduce = require('./mapReduce')
const mconcat = require('./mconcat')
const mconcatMap = require('./mconcatMap')
const mreduce = require('./mreduce')
const mreduceMap = require('./mreduceMap')
const nAry = require('./nAry')
const objOf = require('./objOf')
const omit = require('./omit')
const once = require('./once')
const partial = require('./partial')
const pick = require('./pick')
const pipe = require('./pipe')
const pipeK = require('./pipeK')
const pipeP = require('./pipeP')
const pipeS = require('./pipeS')
const prop = require('../Maybe/prop')
const propOr = require('./propOr')
const propPath = require('../Maybe/propPath')
const propPathOr = require('./propPathOr')
const safe = require('../Maybe/safe')
const safeAfter = require('../Maybe/safeAfter')
const safeLift = require('../Maybe/safeLift')
const setPath = require('./setPath')
const tap = require('./tap')
const toPairs = require('../Pair/toPairs')
const tryCatch = require('../Result/tryCatch')
const unary = require('./unary')
const unit = require('./unit')

test('helpers entry', t => {
  t.equal(index.assign, assign, 'provides the assign helper')
  t.equal(index.assoc, assoc, 'provides the assoc helper')
  t.equal(index.binary, binary, 'provides the binary helper')
  t.equal(index.branch, branch, 'provides the branch helper')
  t.equal(index.compose, compose, 'provides the compose helper')
  t.equal(index.composeK, composeK, 'provides the composeK helper')
  t.equal(index.composeP, composeP, 'provides the composeP helper')
  t.equal(index.composeS, composeS, 'provides the composeS helper')
  t.equal(index.curry, curry, 'provides the curry helper')
  t.equal(index.defaultProps, defaultProps, 'provides the defaultProps helper')
  t.equal(index.defaultTo, defaultTo, 'provides the defaultTo helper')
  t.equal(index.dissoc, dissoc, 'provides the dissoc helper')
  t.equal(index.fanout, fanout, 'provides the fanout helper')
  t.equal(index.find, find, 'provides the find helper')
  t.equal(index.fromPairs, fromPairs, 'provides the fromPairs helper')
  t.equal(index.liftA2, liftA2, 'provides the liftA2 helper')
  t.equal(index.liftA3, liftA3, 'provides the liftA3 helper')
  t.equal(index.liftN, liftN, 'provides the liftN helper')
  t.equal(index.mapProps, mapProps, 'provides the mapProps helper')
  t.equal(index.mapReduce, mapReduce, 'provides the mapReduce helper')
  t.equal(index.mconcat, mconcat, 'provides the mconcat helper')
  t.equal(index.mconcatMap, mconcatMap, 'provides the mconcatMap helper')
  t.equal(index.mreduce, mreduce, 'provides the mreduce helper')
  t.equal(index.mreduceMap, mreduceMap, 'provides the mreduceMap helper')
  t.equal(index.nAry, nAry, 'provides the nAry helper')
  t.equal(index.objOf, objOf, 'provides the objOf helper')
  t.equal(index.omit, omit, 'provides the omit helper')
  t.equal(index.once, once, 'provides the once helper')
  t.equal(index.partial, partial, 'provides the partial helper')
  t.equal(index.pick, pick, 'provides the pick helper')
  t.equal(index.pipe, pipe, 'provides the pipe helper')
  t.equal(index.pipeK, pipeK, 'provides the pipeK helper')
  t.equal(index.pipeP, pipeP, 'provides the pipeP helper')
  t.equal(index.pipeS, pipeS, 'provides the pipeS helper')
  t.equal(index.prop, prop, 'provides the prop helper')
  t.equal(index.propOr, propOr, 'provides the propOr helper')
  t.equal(index.propPath, propPath, 'provides the propPath helper')
  t.equal(index.propPathOr, propPathOr, 'provides the propPathOr helper')
  t.equal(index.safe, safe, 'provides the safe helper')
  t.equal(index.safeAfter, safeAfter, 'provides the safeAfter helper')
  t.equal(index.safeLift, safeLift, 'provides the safeLift helper')
  t.equal(index.setPath, setPath, 'provides the setPath helper')
  t.equal(index.tap, tap, 'provides the tap helper')
  t.equal(index.toPairs, toPairs, 'provides the toPairs helper')
  t.equal(index.tryCatch, tryCatch, 'provides the tryCatch helper')
  t.equal(index.unary, unary, 'provides the unary helper')
  t.equal(index.unit, unit, 'provides the unit helper')

  t.end()
})
