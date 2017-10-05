'use strict'

const path = require('path')

const test = require('ava')
const fs = require('mz/fs')
const requireClean = require('require-clean')
const sinon = require('sinon')

test.beforeEach(t => {
  t.context.sandbox = sinon.sandbox.create()
})

test.afterEach.always(t => {
  t.context.sandbox.restore()
})

test('NODE_ENV (empty)', t => {
  t.context.sandbox.stub(process, 'env', {})
  const { NODE_ENV } = requireClean('./')
  t.is(NODE_ENV, 'development')
})

test('NODE_ENV (development)', t => {
  t.context.sandbox.stub(process, 'env', { NODE_ENV: 'development' })
  const { NODE_ENV } = requireClean('./')
  t.is(NODE_ENV, 'development')
})

test('NODE_ENV (production)', t => {
  t.context.sandbox.stub(process, 'env', { NODE_ENV: 'production' })
  const { NODE_ENV } = requireClean('./')
  t.is(NODE_ENV, 'production')
})

test('NODE_ENV (unknown)', t => {
  t.context.sandbox.stub(process, 'env', { NODE_ENV: 'unknown' })
  t.throws(() => { requireClean('./') })
})

test('PROJECT_DIR', async t => {
  const { PROJECT_DIR } = requireClean('./')
  const pkgPath = path.join(PROJECT_DIR, 'package.json')
  const readmePath = path.join(PROJECT_DIR, 'README.md')
  const ignorePath = path.join(PROJECT_DIR, '.gitignore')
  t.is(require(pkgPath).name, 'gotandajs-api')
  t.truthy(await fs.lstat(readmePath))
  t.truthy(await fs.readFile(ignorePath), 'node_modules')
})
