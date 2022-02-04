import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenStorageService } from "../services/token-storage.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.token.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}