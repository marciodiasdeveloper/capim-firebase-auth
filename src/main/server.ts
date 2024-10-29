import { env } from '@/main/config/env'
import endent from 'endent'
import figlet from 'figlet'

import 'reflect-metadata'

void (async (): Promise<void> => {
  const { app } = await import('@/main/config/app')
  app.listen(env.port, () => {
    console.log(endent`
      Server is running at http://localhost:${env.port}
      Application started successfully!

      ${figlet.textSync(`${env.appName}`)}

      Name: ${env.appName}
      Port: ${env.port}
      Description: ${env.appName} microservice.
      Version: 0.0.1
      Base Path: '/'
      Company: Márcio Dias
      Author: Márcio Dias
      Email: marcio@marciodias.me
      Copyright © ${new Date().getFullYear()} Márcio Dias. All rights reserved.
    `)
  })
})()
