export class User {
    private _id: string
    private _email: string
    private _password: string
    private _username: string
    private _fullname: string
    private _category: string
    private _birthday: Date
    private _experience: number
    private _headerFileName: string
    private _avatarFileName: string
    private _statusText: string
    private _linkToFacebookProfile: string
    private _linkToTwitterProfile: string
    private _linkToDeviantartProfile: string
    private _toggleFacebook: boolean
    private _toggleTwitter: boolean
    private _toggleDeviantart: boolean
    private _isActive: boolean
    private _role: string
    private _token?: string

    constructor() {}

    get id(): string { return this._id }
    set id(id: string) { this._id = id }

    get email(): string { return this._email }
    set email(email: string) { this._email = email }

    get password(): string { return this._password }
    set password(password: string) { this._password = password }

    get username(): string { return this._username }
    set username(username: string) { this._username = username }

    get fullname(): string { return this._fullname }
    set fullname(fullname: string) { this._fullname = fullname }

    get category(): string { return this._category }
    set category(category: string) { this._category = category }

    get birthday(): Date { return this._birthday }
    set birthday(birthday: Date) { this._birthday = birthday }

    get experience(): number { return this._experience }
    set experience(experience: number) { this._experience = experience }

    get headerFileName(): string { return this._headerFileName }
    set headerFileName(headerFileName: string) { this._headerFileName = headerFileName }

    get avatarFileName(): string { return this._avatarFileName }
    set avatarFileName(avatarFileName: string) { this._avatarFileName = avatarFileName }

    get statusText(): string { return this._statusText }
    set statusText(statusText: string) { this._statusText = statusText }

    get linkToFacebookProfile(): string { return this._linkToFacebookProfile }
    set linkToFacebookProfile(profileFacebook: string) { this._linkToFacebookProfile = profileFacebook }

    get linkToTwitterProfile(): string { return this._linkToTwitterProfile }
    set linkToTwitterProfile(profileTwitter: string) { this._linkToTwitterProfile = profileTwitter }

    get linkToDeviantartProfile(): string { return this._linkToDeviantartProfile }
    set linkToDeviantartProfile(profileDeviantart: string) { this._linkToDeviantartProfile = profileDeviantart }

    get toggleFacebook(): boolean { return this._toggleFacebook }
    set toggleFacebook(activeFacebook: boolean) { this._toggleFacebook = activeFacebook }

    get toggleTwitter(): boolean { return this._toggleTwitter }
    set toggleTwitter(activeTwitter: boolean) { this._toggleTwitter = activeTwitter }

    get toggleDeviantart(): boolean { return this._toggleDeviantart }
    set toggleDeviantart(activeDeviantart: boolean) { this._toggleDeviantart = activeDeviantart }

    get isActive(): boolean { return this._isActive }
    set isActive(isActive: boolean) { this._isActive = isActive }

    get role(): string { return this._role }
    set role(role: string) { this._role = role }

    get token(): string { return this._token }
    set token(token: string) { this._token = token }
}
