import axios, { AxiosInstance } from 'axios'

class Requester {
  private apiHost: string = process.env.RAPID_API_HOST
  private apiKey: string = process.env.RAPID_API_KEY
  private apiUrl: string = process.env.RAPID_API_URL
  private instance: AxiosInstance = null

  createInstance ():void {
    this.instance = axios.create({
      baseURL: this.apiUrl,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': this.apiHost,
        'x-rapidapi-key': this.apiKey
      }
    })
  }

  getInstance ():AxiosInstance {
    if (this.instance === null) {
      this.createInstance()
    }
    return this.instance
  }
}

const RequesterInstance = new Requester()

export default RequesterInstance
