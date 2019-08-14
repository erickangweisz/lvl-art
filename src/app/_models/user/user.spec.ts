import { User } from './user'
import * as moment from 'moment'

describe('Tests for User', () => {
  let user: User

  beforeEach(() => {
    user = new User()
  })

  it('should create an instance', () => {
    expect(new User()).toBeTruthy()
  })

  it('id value should be the expected")', () => {
    user.id = 'ObjectId("5c8905dc65dc0564334b10f4")'
    let userIdExpected: string = 'ObjectId("5c8905dc65dc0564334b10f4")'
    expect(user.id).toBe(userIdExpected)
  })

  it('email value should be the expected', () => {
    user.email = 'test@lvl-art.com'
    let emailExpected: string = 'test@lvl-art.com'
    expect(user.email).toBe(emailExpected)
  })

  it('password value should be the expected', () => {
    user.password = '$2a$10$b/.jAyHXf2Wm6BhXDtnCn.aTlhUY3vxo.SuxRkRlWUiVzorhAq8t2'
    let passwordExpected: string = '$2a$10$b/.jAyHXf2Wm6BhXDtnCn.aTlhUY3vxo.SuxRkRlWUiVzorhAq8t2'
    expect(user.password).toBe(passwordExpected)
  })

  it('username value should be the expected', () => {
    user.username = 'EricKangWeisz'
    let usernameExpected: string = 'EricKangWeisz'
    expect(user.username).toBe(usernameExpected)
  })

  it('firstname value should be the expected', () => {
    user.firstname = 'John'
    let firstnameExpected: string = 'John'
    expect(user.firstname).toBe(firstnameExpected)
  })

  it('lastname value should be the expected', () => {
    user.lastname = 'Doe'
    let lastnameExpected: string = 'Doe'
    expect(user.lastname).toBe(lastnameExpected)
  })

  it('category value should be the expected', () => {
    user.category = 'illustration'
    let categoryExpected: string = 'illustration'
    expect(user.category).toBe(categoryExpected)
  })

  it('birthday value should be the expected', () => {
    user.birthday = moment('1987-07-17').toDate()
    let birthdayExpected: Date = moment('1987-07-17').toDate()
    expect(user.birthday).toEqual(birthdayExpected)
  })

  it('experience value should be the expected', () => {
    user.experience = 1022.5
    let experienceExpected: number = 1022.5
    expect(user.experience).toBe(experienceExpected)
  })

  it('headerFileName value should be the expected', () => {
    user.headerFileName = 'MfYfNLjgsW5g5IVBqwf2diHL.png'
    let headerFileNameExpected: string = 'MfYfNLjgsW5g5IVBqwf2diHL.png'
    expect(user.headerFileName).toBe(headerFileNameExpected)
  })

  it('avatarFileName value should be the expected', () => {
    user.avatarFileName = 'r9FR4FHVd-gIc6QQXYmFMhQ0.png'
    let avatarFileNameExpected: string = 'r9FR4FHVd-gIc6QQXYmFMhQ0.png'
    expect(user.avatarFileName).toBe(avatarFileNameExpected)
  })

  it('statusText value should be the expected', () => {
    user.statusText = 'Put your status here!'
    let statusTextExpected: string = 'Put your status here!'
    expect(user.statusText).toBe(statusTextExpected)
  })

  it('linkToFacebookProfile value should be the expected', () => {
    user.linkToFacebookProfile = 'https://www.facebook.com/'
    let linkToFacebookProfileExpected: string = 'https://www.facebook.com/'
    expect(user.linkToFacebookProfile).toBe(linkToFacebookProfileExpected)
  })

  it('linkToTwitterProfile value should be the expected', () => {
    user.linkToTwitterProfile = 'https://www.twitter.com/'
    let linkToTwitterProfileExpected: string = 'https://www.twitter.com/'
    expect(user.linkToTwitterProfile).toBe(linkToTwitterProfileExpected)
  })

  it('linkToDeviantartProfile value should be the expected', () => {
    user.linkToDeviantartProfile = 'https://www.deviantart.com/'
    let linkToDeviantartProfileExpected: string = 'https://www.deviantart.com/'
    expect(user.linkToDeviantartProfile).toBe(linkToDeviantartProfileExpected)
  })

  it('toggleFacebook value should be the expected', () => {
    user.toggleFacebook = true
    let toggleFacebookExpected: boolean = true
    expect(user.toggleFacebook).toBe(toggleFacebookExpected)
  })

  it('toggleTwitter value should be the expected', () => {
    user.toggleTwitter = true
    let toggleTwitter: boolean = true
    expect(user.toggleTwitter).toBe(toggleTwitter)
  })

  it('toggleDeviantart value should be the expected', () => {
    user.toggleDeviantart = true
    let toggleDeviantartExpected: boolean = true
    expect(user.toggleDeviantart).toBe(toggleDeviantartExpected)
  })

  it('role value should be the expected', () => {
    user.role = 'admin'
    let roleExpected: string = 'admin'
    expect(user.role).toBe(roleExpected)
  })

  it('token value should be the expected', () => {
    user.token =
      'eyJ0eXAiOiJKV1YiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzp5\
      MDVkYzY1ZGMwNTY0MzM0YjEwZjQiLKJ1c2VybmFtZSI6InRlc3QiL\
      CJmaXJzdG5hbWUiOiJqb2hucyIsImxhc3RuYW1lIjoiZG9lc3MiLC\
      JlbWFpbCI6InRlc3RAbHZsLWFydC5jb20iLCJyb2xlIjoiUk9MRV9\
      VU0VSIiwiaWF0IjoxNTY1MDI4NDIwLCJleHAiOjE1Njc2MjA0MjB9\
      .3b26FIxYtZ4HwXZd0tPMt2y0_7115ERTdlKA_BduCzQ'
    let tokenExpected: string =
      'eyJ0eXAiOiJKV1YiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzp5\
      MDVkYzY1ZGMwNTY0MzM0YjEwZjQiLKJ1c2VybmFtZSI6InRlc3QiL\
      CJmaXJzdG5hbWUiOiJqb2hucyIsImxhc3RuYW1lIjoiZG9lc3MiLC\
      JlbWFpbCI6InRlc3RAbHZsLWFydC5jb20iLCJyb2xlIjoiUk9MRV9\
      VU0VSIiwiaWF0IjoxNTY1MDI4NDIwLCJleHAiOjE1Njc2MjA0MjB9\
      .3b26FIxYtZ4HwXZd0tPMt2y0_7115ERTdlKA_BduCzQ'
      expect(user.token).toBe(tokenExpected)
  })
})