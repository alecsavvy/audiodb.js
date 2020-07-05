export interface ISearch {
    baseUrl: String,
    artistDetails(artistName: String): Promise<any>,
    allAlbumDetails(artistName: String): Promise<any>,
    singleAlbumDetails(albumName: String, artistName?: String): Promise<any>,
    trackDetails(artistName: String, trackName: String): Promise<any>,
    discography(artistName: String, mbid?: String): Promise<any>,
}

export class Search implements ISearch {
    baseUrl: String;
    constructor(baseUrl: String) {
        this.baseUrl = baseUrl;
    }

    artistDetails(artistName: String): Promise<any> {
        return fetch(`${this.baseUrl}/search.php?s=${artistName}`)
    }

    allAlbumDetails(artistName: String): Promise<any> {
        return fetch(`${this.baseUrl}/searchalbum.php?s=${artistName}`)
    }

    singleAlbumDetails(albumName: String, artistName?: String): Promise<any> {
        return fetch(`${this.baseUrl}/searchalbum.php?s=${albumName}&a=${artistName || ""}`)
    }

    trackDetails(artistName: String, trackName: String): Promise<any> {
        return fetch(`${this.baseUrl}/searchtrack.php?s=${artistName}&t=${trackName}`)
    }

    discography(artistName: String, mbid?: String): Promise<any> {
        if (mbid) return fetch(`${this.baseUrl}/discography.php?s=${mbid}`)
        return fetch(`${this.baseUrl}/discography.php?s=${artistName}`)
    }
}
