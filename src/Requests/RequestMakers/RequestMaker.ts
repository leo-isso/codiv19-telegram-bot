import { AxiosResponse } from 'axios'

import Requester from '../Requester'
import { StatisticsSchema, NewsSchema } from '../../Schemas'

class RequestMaker {
  private apiEndpoint: string
  private response: AxiosResponse
  private requester: Requester
  private parameters: object

  constructor (requester: Requester, apiEndpoint:string, parameters?:object) {
    this.apiEndpoint = apiEndpoint
    this.requester = requester
    this.parameters = parameters || {}
  }

  getResponseData (): StatisticsSchema | NewsSchema {
    return this.response.data
  }

  async makeRequest (): Promise<void> {
    const requester = this.requester.getInstance()
    const response = await requester.get(this.apiEndpoint, { params: this.parameters })
    this.response = response
  }
}

export default RequestMaker
