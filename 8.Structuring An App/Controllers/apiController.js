module.exports = function (app) {
    //JSON API requests:
    app.get('/api/person/:id', function (req, res) {
        //get that person from database
        res.json({ firstname: 'jhon', lastname: 'Doe' });
    });
    app.post('/api/person/', function (req, res) {
        //save that data to database
        res.send('thank you');
    });
    app.delete('/api/person/:id', function (req, res) {
        //delete that person from database
    });
}