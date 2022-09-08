#!/usr/bin/env node

const os = require('os')

const encodeMessage = msg => {
  let json = JSON.stringify(msg)
  let buffer = Buffer.alloc(4)
  buffer[`writeUInt32${os.endianness()}`](json.length)
  return Buffer.concat([buffer, Buffer.from(json)])
}

const getMessage = () => {
  let bufsize = 4
  let buf = process.stdin.read(bufsize)
  if (buf === null)
    process.exit(0)
  let len = buf[`readUInt32${os.endianness()}`]()
  if (len === 0)
    process.exit(0)
  let buf2 = process.stdin.read(len)
  let msg = JSON.parse(buf2.toString('utf8'))
  return msg
}

process.stdin.on('readable', () => {
  let msg = getMessage()
  if (msg === 'ping')
    process.stdout.write(encodeMessage('pong!'))
})
