import {Env, forge, VannilaGateway} from 'mappersmith'

Env.USE_PROMISES = true

const manifest = {
  host: 'http://api.openweathermap.org/data/2.5',
  resources: {
    Weather: {
      all: 'get:/weather'
    }
  }
}

export const API = forge(manifest, VannilaGateway, 'data')
