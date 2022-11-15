const randomStrings = {
    governingBody: ['FIFA', 'FINA', 'FIA', 'FIBA', 'FIVB', 'ICC', 'IOC', 'UEFA', 'World Rudby', 'ITF', 'World Athletics', 'BWF'],
    countries: ['Argentina', 'Belgium', 'Brazil', 'Canada', 'Croatia', 'Denmark', 'England', 'France', 'Germany', 'Iran', 'Japan', 'Mexico', 'Netherlands', 'Portugal', 'Qatar',
                'South Korea', 'Spain', 'United States', 'Italy', 'China'],
    teams: ['Manchester United', 'New York Yankees', 'Los Angeles Lakers', 'Real Madrid', 'Boston Red Sox', 'Detroit Red Wings', 'Toronto Maple Leafs', 'Arsenal FC', 'FC Barcelona', 
            'New York Knicks', 'Green Bay Packers', 'Boston Celtics', 'AC Milan', 'Los Angeles Galaxy', 'Bayern Munich', 'Chicago Bulls', 'Liverpool FC', 'Chelsea FC', 'Shanghai Shenhua']
}

const randomIndex = (num) => {
    return Math.floor(Math.random() * num);
}

const formatString = (arr) => {
    formatted = arr.join('');
    console.log(formatted);
}

const finalMatchup = [];

for (let prop in randomStrings) {
    optionIndex = randomIndex(randomStrings[prop].length);

    switch(prop) {
        case 'governingBody' :
            finalMatchup.push(`Qatar 2022 ${randomStrings[prop][optionIndex]} World Cup Final:\n`);
            break;
        case 'countries' :
            finalMatchup.push(`${randomStrings[prop][optionIndex]} VS `);
            break;
        case 'teams' :
            finalMatchup.push(randomStrings[prop][optionIndex]);
            break;
        default :
            finalMatchup.push('There is not enough info.');
    }
}

formatString(finalMatchup);