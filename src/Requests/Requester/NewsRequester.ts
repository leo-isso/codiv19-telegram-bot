import { AxiosInstance } from 'axios'
import { OutgoingHttpHeaders } from 'http'

import Requester from './Requester'

class NewsRequester extends Requester {
  apiKey: string = process.env.NEWS_API_KEY
  apiUrl: string = process.env.NEWS_API_URL
  instance: AxiosInstance = null

  createHeaders (): OutgoingHttpHeaders {
    return {
      'X-Api-Key': this.apiKey
    }
  }
}

const NewsRequesterInstance = new NewsRequester()

export default NewsRequesterInstance
