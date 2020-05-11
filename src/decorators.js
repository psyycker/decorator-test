
function doSingleLog(methodTypeTarget) {
  if (typeof methodTypeTarget.descriptor.value === 'function') {
    const original = methodTypeTarget.descriptor.value;
    methodTypeTarget.descriptor.value = function(...args) {
      console.log('arguments: ', args);
      const result = original.apply(this, args);
      console.log('result: ', result);
      return result;
    }
  }
  return methodTypeTarget;
}

export function log(target) {
  if (target.kind === 'method') {
    return doSingleLog(target)
  } else if (target.kind === 'class') {
    target.elements = target.elements.map((element) => doSingleLog(element))
  }
  return target;
}
