import { Search, ISearch } from './Search';

export default class AudioDb {
    clientId: String;
    url: String;
    search: ISearch;
    constructor(clientId?: String) {
        this.clientId = clientId || "1"; // 1 is test client_id
        this.url = `https://theaudiodb.com/api/v1/json/${clientId}`
        this.search = new Search(this.url);
    }
}