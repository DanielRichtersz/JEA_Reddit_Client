import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log("Interceptor: Intercepted REST request, adding auth");
        let currentUser = this.loginService.currentUserValue;  
        console.log("Currentuser: ", currentUser);

        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${currentUser.token}`
                }
            });

            console.log("Header added", request);
        }

        console.log("Request: ", request);

        return next.handle(request);
    }
}