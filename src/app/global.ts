//

"use strict"

export const BASE_URL: string = `https://futura-vision-api.42web.io/api/`;
export const BASE_API_URL: string = `${BASE_URL}api/`;
export const BASE_STORAGE_URL: string = `${BASE_URL}storage/`;
export const AUTH_NAME: string = `authForLearningAngular`;
export function rewrite_url(title: string): string {
    return title.replace(/[^a-zA-Z0-9\-]/g, '-').toLowerCase();
}
export function loading_animate(state: boolean) {
    let el = document.querySelector('main');
    if (state) {
       return el?.classList.add('loading')
    }
    el?.classList.remove('loading')
}