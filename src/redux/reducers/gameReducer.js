import {
  Paper,
  Rock,
  Scissor,
  Player,
  Bot,
} from '../../GameAppStateManagement/assets';
import {
  CHECK_RESULT_ROCK_PAPER_SCISSOR,
  PLAY_GAME_ROCK_PAPER_SCISSOR,
  RESET_ROCK_PAPER_SCISSOR,
  SELECT_OPTION_ROCK_PAPER_SCISSOR,
} from '../actions/gameAction';

const selectedOptionConstant = [
  {type: 'rock', image: Rock},
  {type: 'paper', image: Paper},
  {type: 'scissor', image: Scissor},
];

const initState = {
  playerSelected: selectedOptionConstant[0],
  playerImage: Player,
  botSelected: selectedOptionConstant[1],
  botImage: Bot,
  selectOption: selectedOptionConstant,
  score: 0,
  times: 9,
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_OPTION_ROCK_PAPER_SCISSOR:
      state.playerSelected = action.payload;
      return {...state};
    case PLAY_GAME_ROCK_PAPER_SCISSOR:
      state.botSelected = selectedOptionConstant[Math.floor(Math.random() * 3)];
      return {...state};
    case CHECK_RESULT_ROCK_PAPER_SCISSOR:
      const {playerSelected, botSelected, times, score} = state;
      if (playerSelected.type === botSelected.type) {
        return {...state, times: times - 1, score};
      } else if (
        (playerSelected.type === 'rock' && botSelected.type === 'scissor') ||
        (playerSelected.type === 'scissor' && botSelected.type === 'paper') ||
        (playerSelected.type === 'paper' && botSelected.type === 'rock')
      ) {
        return {...state, times: times + 1, score: score + 1};
      } else {
        return {...state, times: times - 1, score: score - 1};
      }
    case RESET_ROCK_PAPER_SCISSOR:
      return initState;
    default:
      return {...state};
  }
};

export default gameReducer;
