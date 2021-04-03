import _memoize from 'fast-memoize'

export function memoize(){
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor){
    const original = descriptor.value
    descriptor.value = _memoize(original)
    return descriptor
  }
}
