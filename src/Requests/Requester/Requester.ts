import axios, { AxiosInstance } from 'axios'
import { OutgoingHttpHeaders } from 'http'

class Requester {
  apiUrl: string
  instance: AxiosInstance = null
  parameters: object

  constructor (parameters?: object) {
    this.parameters = parameters || {}
  }

  createInstance ():void {
    this.instance = axios.create({
      baseURL: this.apiUrl,
      headers: this.createHeaders(),
      params: this.parameters
    })
  }

  createHeaders ():OutgoingHttpHeaders {
    return {}
  }

  getInstance ():AxiosInstance {
    if (this.instance === null) {
      this.createInstance()
    }
    return this.instance
  }
}

export default Requester
