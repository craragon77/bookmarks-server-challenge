const testBookmarks = require('./bookmarks.spec')
const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 containing "Hello, Dave"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, Dave')
  })
  it('gets bookmarks response with 200 and all of the things', () => {
    return supertest(app)
      .get('/bookmarks')
      .expect(200, testBookmarks)
  })
})