import './utils/env'
import Requester from './Requests/Requester'

const a = Requester.getInstance()

const request = async (): Promise<object> => {
  const response = await a.get('/statistics')
  return response
}

request().then(res => console.log(res))
