import hash from 'object-hash'
import fs from 'fs'

export default (options, payload) => {
  return hash(payload)
}
