export interface ApiUser {
    users_lastName: string
    users_firstName: string
    users_pwd: string
    users_mail: string
    users_birthday: any
}

export class User {
    lastName: string
    firstName: string
    email: string
    password: string
    birthday: any

    constructor(lastName: string, firstName: string, email: string, password: string, birthday: any) {
        this.lastName = lastName
        this.firstName = firstName
        this.email = email
        this.password = password
        this.birthday = birthday
    }
 
    getApiData(): ApiUser {
        return {
            users_lastName: this.lastName,
            users_firstName: this.firstName,
            users_pwd: this.password,
            users_mail: this.password,
            users_birthday: this.birthday
        }
    }
}