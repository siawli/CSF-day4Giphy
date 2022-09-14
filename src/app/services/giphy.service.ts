import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, Subject } from "rxjs";
import { Criteria } from "../models";

@Injectable()
export class GiphyService {

    constructor(private httpClient: HttpClient) { }

    onNewSearch = new Subject<string[]>();

    search(criteria: Criteria): Promise<string[]> {

        const params = new HttpParams()
            .set("api_key", criteria.api)
            .set("q", criteria.search)
            .set("limit", criteria.limit)
            .set("rating", criteria.rating)

        return firstValueFrom(
            this.httpClient.get<any>("https://api.giphy.com/v1/gifs/search", { params })
                .pipe(
                    map(results => {
                        const data = results.data;
                        return data.map((obj:any) => 
                            obj.images.original.url as string
                        )
                    })
                )
        )
    }
}