lazy = (ctor, name, create) ->
  getter = () ->
    if (@ == ctor.prototype) or (not @ instanceof ctor)
      return getter

    value = create.call(@)

    Object.defineProperty(@, name, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    })

    return value

  setter = (value) ->
    Object.defineProperty(ctor.prototype, name, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    })
    return value

  getter.lazy = true

  Object.defineProperty(ctor.prototype, name, {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  })

  return getter
