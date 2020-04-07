import { AxiosResponse } from 'axios'

import Requester from '../Requester'
import { StatisticsSchema } from '../../Schemas'

class RequestMaker {
  private apiEndpoint: string
  private response: AxiosResponse<StatisticsSchema>
  private requester: Requester

  constructor (requester: Requester, apiEndpoint:string) {
    this.apiEndpoint = apiEndpoint
    this.requester = requester
  }

  getResponseData (): StatisticsSchema {
    return this.response.data
  }

  async makeRequest (): Promise<void> {
    const requester = this.requester.getInstance()
    const response = await requester.get(this.apiEndpoint)
    this.response = response
  }
}

export default RequestMaker
