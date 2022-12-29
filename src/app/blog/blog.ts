export class Blog {
    category_id: number;
    title: string;
    content: string;
    cover: string;
    user: object;

    constructor(
        category_id: number = 1,
        title: string = '',
        content: string = '',
        cover: string = '',
        user: object = {}
    ){
        this.category_id = category_id;
        this.title = title;
        this.content = content;
        this.cover = cover;
        this.user = user
    }
}