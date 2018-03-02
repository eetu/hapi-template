import axios from 'axios';

export interface HapiTemplateClientOptions {
  url: string;
}

export interface DotItem {
  id?: number;
  dots: string;
}

class HapiTemplateClient {
  private options: HapiTemplateClientOptions;

  constructor(options?: HapiTemplateClientOptions) {
    this.options = options ? options : { url: process.env.HAPI_TEMPLATE_URL };
  }

  public async getDot(id: number): Promise<DotItem> {
    return (await axios.get(`${this.options.url}/dots/${id}`)).data;
  }

  public async addDot(dot: DotItem): Promise<DotItem> {
    return (await axios.post(`${this.options.url}/dots`, dot)).data;
  }
}

export default HapiTemplateClient;
