//BASE URL
const base_url = "https://api.rawg.io/api/";
var api = process.env.REACT_APP_API_KEY;
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games URL
const popular_games = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${api}`;
//Game Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${api}`;
//Searched Game
export const SearchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&key=${api}&page_size=9`;
