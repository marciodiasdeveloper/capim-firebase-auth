import { MountUrl } from '@/domain/entities'

describe('MountUrl', () => {
  describe('developer url', () => {
    it('should mount default url', () => {
      const urlMounted = new MountUrl('domain', 'dev', 'test/test', 'en').mountUrl()
      expect(urlMounted).toEqual('http://domain:3000/en/test/test')
    })
    it('should mount ur language', () => {
      const urlMounted = new MountUrl('domain', 'dev', 'test/test', 'ur').mountUrl()
      expect(urlMounted).toEqual('http://domain:3000/ur/test/test')
    })
    it('should mount brazilian language url', () => {
      const urlMounted = new MountUrl('domain', 'dev', 'test/test', 'pt-BR').mountUrl()
      expect(urlMounted).toEqual('http://domain:3000/test/test')
    })
  })
  describe('production url', () => {
    it('should mount default url', () => {
      const urlMounted = new MountUrl('domain', 'production', 'test/test', 'en').mountUrl()
      expect(urlMounted).toEqual('https://domain/en/test/test')
    })
    it('should mount ur language url', () => {
      const urlMounted = new MountUrl('domain', 'production', 'test/test', 'ur').mountUrl()
      expect(urlMounted).toEqual('https://domain/ur/test/test')
    })
    it('should mount brazilian language url', () => {
      const urlMounted = new MountUrl('domain', 'production', 'test/test', 'pt-BR').mountUrl()
      expect(urlMounted).toEqual('https://domain/test/test')
    })
  })
})
