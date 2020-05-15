const {expect} = require('chai')
const knex = requrie('knex')
const app = require('../src/app')

describe.only('Articles Endpoints', function(){
    let db 
    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })
    after('disconnect from db', () => db.destroy())
    before('clean the table', () =>('blogful_articles').truncate())

    context('given there are articles in the database', () => {
        const testBookmarks = [
            {
                id: 1,
                title: 'testing-title',
                url: 'www.test.org',
                description: 'description',
                rating: 420
            },
            {
                id: 2,
                title: 'testing-title-2',
                url: 'www.test.org',
                description: 'description',
                rating: 69
            },
            {
                id: 3,
                title: 'testing-title-3',
                url: 'www.test.org',
                description: 'description',
                rating: 666
            }
        ]
    })
})