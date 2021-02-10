import Fetch from '@/utils/request'

export default class Test extends Fetch {
  static async getPayTypes () {
    const data = await this.get('/jiwu/getPayTypes')
    return data
  }
}