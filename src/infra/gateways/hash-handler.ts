import crypto from 'crypto'
import { Decrypt, Encrypt } from '@/domain/contracts/gateways'

export class HashHandler implements Encrypt, Decrypt {
  private readonly salt: string
  iv: Buffer
  constructor (salt: string, avKey: string){
    this.salt = salt
    this.iv = Buffer.from(avKey)
  }

  decrypt (input: Decrypt.Input): Decrypt.Output {
    const encryptedText = Buffer.from(input.valueCrypted, 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(this.salt), this.iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return { value: decrypted.toString() }
  }

  encrypt (input: Encrypt.Input): Encrypt.Output {
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(this.salt), this.iv)
    let encrypted = cipher.update(input.value)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return { value: encrypted.toString('hex') }
  }
}
