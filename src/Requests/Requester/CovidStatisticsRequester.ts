import { AxiosInstance } from 'axios'
import { OutgoingHttpHeaders } from 'http'

import './../../utils/env'
import Requester from './Requester'

class CovidStatisticsRequester extends Requester {
  apiHost: string = process.env.RAPID_API_HOST
  apiKey: string = process.env.RAPID_API_KEY
  apiUrl: string = process.env.RAPID_API_URL
  instance: AxiosInstance = null

  createHeaders (): OutgoingHttpHeaders {
    return {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': this.apiHost,
      'x-rapidapi-key': this.apiKey
    }
  }
}

const CovidStatisticsRequesterInstance = new CovidStatisticsRequester()

export default CovidStatisticsRequesterInstance
