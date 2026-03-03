import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function imageUploadPlugin() {
  return {
    name: 'image-upload',
    configureServer(server: any) {
      const imagesDir = path.resolve(process.cwd(), 'public/images')

      server.middlewares.use((req: any, res: any, next: any) => {
        if (!req.url?.startsWith('/api/upload')) return next()

        if (!fs.existsSync(imagesDir)) {
          fs.mkdirSync(imagesDir, { recursive: true })
        }

        const url = new URL(req.url, 'http://localhost')
        const key = url.searchParams.get('key') ?? ''
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')

        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk: any) => (body += chunk))
          req.on('end', () => {
            try {
              const { dataUrl, ext } = JSON.parse(body)
              // Remove arquivos antigos com essa chave
              if (key && fs.existsSync(imagesDir)) {
                fs.readdirSync(imagesDir)
                  .filter(f => f.startsWith(key + '.'))
                  .forEach(f => fs.unlinkSync(path.join(imagesDir, f)))
              }
              const base64 = dataUrl.split(',')[1]
              const filename = `${key || Date.now()}.${ext}`
              fs.writeFileSync(path.join(imagesDir, filename), Buffer.from(base64, 'base64'))
              res.end(JSON.stringify({ url: `/images/${filename}` }))
            } catch (e) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: String(e) }))
            }
          })
        } else if (req.method === 'DELETE') {
          if (key && fs.existsSync(imagesDir)) {
            fs.readdirSync(imagesDir)
              .filter(f => f.startsWith(key + '.'))
              .forEach(f => fs.unlinkSync(path.join(imagesDir, f)))
          }
          res.end(JSON.stringify({ ok: true }))
        } else {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), imageUploadPlugin()],
})
