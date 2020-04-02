import { AxiosResponse } from 'axios'

import Requester from '../Requester'
import { StatisticsSchema } from '../../Schemas'

class RequestMaker {
  private apiEndpoint: string
  private response: AxiosResponse<StatisticsSchema>

  setApiEndpoint (apiEndpoint:string) : void {
    this.apiEndpoint = apiEndpoint
  }

  getResponseData (): StatisticsSchema {
    return this.response.data
  }

  async makeRequest (): Promise<void> {
    const requester = Requester.getInstance()
    const response = await requester.get(this.apiEndpoint)
    this.response = response
  }
}

export default RequestMaker
