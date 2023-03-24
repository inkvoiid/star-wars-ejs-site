import moviesJson from "../movies.json" assert{type:"json"};

var movies = moviesJson.movies

export function home(request, response){
    response.render("home",{
        title: "Homepage - ejs",
        movies: movies
    });
};

export function about(request, response){
    response.render("about",{
        title: "About Us - ejs",
        movies: movies
    });
};

export function starwarsmovie(request, response){
    var epNum = request.params.epnum;
    if(epNum >= 1 && epNum <= 12)
    {
        var movie = moviesJson.movies[epNum-1];
        var title = movie.title;
        response.render("starwarspage",{
            title: title,
            movies: movies,
            movie: movie
        });
    }
    else
    {
        response.send("This is not the page you are loking for")
    }
    ;
};

export function notfound(request, response){
    var madeUpPage = request.params.madeuppage;
    response.render("pagenotfound", {madeuppage: madeUpPage});
};