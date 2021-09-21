import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestClientService } from "./rest-client.service";
import { UserInfo } from "../models/user-info.model";

@Injectable()
export class UserInfoService {
    constructor(private restClient: RestClientService) { }

    getUserInfo(): Observable<UserInfo[]> {
        return this.restClient.get<UserInfo[]>('users');
    }
}