import { AxiosResponse } from 'axios'

import Requester from '../Requester'

class RequestMaker {
  private apiEndpoint: string
  private response: AxiosResponse

  setApiEndpoint (apiEndpoint:string) : void {
    this.apiEndpoint = apiEndpoint
  }

  getResponseData (): object {
    return this.response.data
  }

  async makeRequest (): Promise<void> {
    const requester = Requester.getInstance()
    const response = await requester.get(this.apiEndpoint)
    this.response = response
  }
}

export default RequestMaker
