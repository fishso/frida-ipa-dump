const wrap = (symbol, ret, args) =>
  new NativeFunction(Module.findExportByName(null, symbol), ret, args)

export const open = wrap('open', 'int', ['pointer', 'int', 'int'])
export const close = wrap('close', 'int', ['int'])
export const read = wrap('read', 'int', ['int', 'pointer', 'int'])
export const write = wrap('write', 'int', ['int', 'pointer', 'int'])
export const lseek = wrap('lseek', 'int64', ['int', 'int64', 'int'])
export const unlink = wrap('unlink', 'int', ['pointer'])
export const getenv = wrap('getenv', 'pointer', ['pointer'])

export const O_RDONLY = 0
export const O_RDWR = 2

export const SEEK_SET = 0


// https://github.com/apple/darwin-xnu/blob/master/bsd/sys/mman.h

export const PROT_READ = 0x1
export const PROT_WRITE = 0x2

export const MAP_SHARED = 0x1
export const MAP_PRIVATE = 0x2