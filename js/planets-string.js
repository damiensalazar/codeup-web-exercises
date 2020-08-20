(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString)
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanetsString = "Sun\nMercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune\nPluto";
    var newNewPlanetsString = "Sun<br>Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune<br>Pluto";
    var newPlanetsArray;


    console.log(newPlanetsString);
    newPlanetsArray = newPlanetsString.split("\n")
    console.log(newPlanetsArray)
    console.log(newNewPlanetsString)
    // newPlanetsArray.join(",")
    // console.log(newPlanetsArray);

    var newArray = ['The Planets', ['Sun', 'Mercury', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']];
    console.log(newArray);


})();