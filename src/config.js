module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://dunder_mufflin@localhost/bookmark_coding_challenge',
    TEST_DB_URL='postgresql://dunder_mifflin@localhost/book_coding_challenge'
}