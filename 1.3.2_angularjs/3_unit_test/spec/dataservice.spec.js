/**
 * @file service
 * @author bian17888 2017/8/7 16:02
 */
describe('omdb service', function () {

    var $httpBackend;
    var dataservice = {};
    var movieData = {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.7",
        "imdbVotes": "988,094",
        "imdbID": "tt0076759",
        "Type": "movie",
        "DVD": "21 Sep 2004",
        "BoxOffice": "N/A",
        "Production": "20th Century Fox",
        "Website": "http://www.starwars.com/episode-iv/",
        "Response": "True"
    };

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$httpBackend_, _dataservice_) {
        dataservice = _dataservice_;
        $httpBackend = _$httpBackend_;
    }));
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should PUT popular movie', function () {
        var expectedData = {
            movieId: 1,
            description : 'Great movie!'
        };

        $httpBackend.expect('PUT', 'popular')
            .respond(200, expectedData);
        dataservice.popularMovie().update({
            movieId: 1,
            description : 'Great movie!'
        });

        //$httpBackend.flush(1);

        expect($httpBackend.flush).not.toThrow();
    });

    it('should return search movie data', function () {
        var response;
        var expectedUrl = /^https:\/\/api.github.com\/repos\/bian17888\/\w+/;

        $httpBackend.expect('GET', expectedUrl)
            .respond(200, movieData);

        dataservice.find('github_bk')
            .then(function (data) {
                response = data.data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    });

    it('should handle error', function () {
        var response;
        var expectedUrl = 'https://api.github.com/repos/bian17888/github_bk';

        $httpBackend.expect('GET', expectedUrl)
            .respond(500);

        dataservice.find('github_bk')
            .then(function (data) {
                response = data.data;
            })
            .catch(function () {
                response = 'Error!';
            });

        $httpBackend.flush();

        expect(response).toEqual('Error!');
    });


});

