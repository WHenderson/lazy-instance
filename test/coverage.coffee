assert = require('chai').assert

suite('coverage', () ->
  lazyInstance = null

  setup(() ->
    lazyInstance = require('../dist/lazy-instance.coffee')
    #lazyInstance = require('../index')
  )

  test('lazy', () ->
    class MyClass
      constructor: () ->
        @a = 1

      b: 2

    lazyInstance(MyClass, 'c', () -> @a + @b)

    myInstance = new MyClass()

    assert(MyClass.prototype.c?.lazy, 'not lazy enough')
    assert(not {}.hasOwnProperty.call(myInstance, 'c'), 'instantiated too early')
    assert.deepEqual(myInstance.c, 3, 'incorrect value')
    assert({}.hasOwnProperty.call(myInstance, 'c'), 'not instantiated')

    MyClass.prototype.c = 4
    assert.deepEqual(myInstance.c, 3, 'incorrect override')
    delete myInstance.c
    assert.deepEqual(myInstance.c, 4, 'incorrect override')
  )
)
