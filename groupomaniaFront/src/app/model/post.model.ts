import { ApiUser, User } from "./user.model"

export interface ApiPost {
    posts_id: number,
    posts_author: number,
    posts_title: string,
    posts_file: any,
    posts_dateOfPublish: any,
    posts_likes: number,
    posts_unlikes: number,
    posts_numberOfComments: number
    users_id?: number
    users_lastName?: string
    users_firstName?: string
    users_pwd?: string
    users_mail?: string
    users_birthday?: any
}

export class Post {
    id: number
    author: User
    title: string
    file: any
    dateOfPublish: any
    likes: number
    unlikes: number
    numberOfComments: number
    comments: Array<Comment>

    constructor(id: number, author: User, title: string, file: any, dateOfPublish: any, likes: number, unlikes: number, numberOfComments: number) {
        this.id = id,
            this.author = author,
            this.title = title,
            this.dateOfPublish = dateOfPublish,
            this.file = file,
            this.likes = likes,
            this.unlikes = unlikes,
            this.numberOfComments = numberOfComments
    }

    getApiData(): ApiPost {
        return {
            posts_id: this.id,
            posts_author: this.author.id,
            posts_title: this.title,
            posts_file: this.file,
            posts_dateOfPublish: this.dateOfPublish,
            posts_likes: this.likes,
            posts_unlikes: this.unlikes,
            posts_numberOfComments: this.numberOfComments
        }
    }
}