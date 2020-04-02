import RequestMaker from './RequestMaker'

class StatisticsRequestMaker extends RequestMaker {
  constructor () {
    super()
    this.setApiEndpoint('/statistics')
  }
}

export default StatisticsRequestMaker
