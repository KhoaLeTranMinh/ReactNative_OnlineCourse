export const SELECT_OPTION_ROCK_PAPER_SCISSOR =
  'SELECT_OPTION_ROCK_PAPER_SCISSOR';
export const PLAY_GAME_ROCK_PAPER_SCISSOR = 'PLAY_GAME_ROCK_PAPER_SCISSOR';
export const RESET_ROCK_PAPER_SCISSOR = 'RESET_ROCK_PAPER_SCISSOR';
export const CHECK_RESULT_ROCK_PAPER_SCISSOR =
  'CHECK_RESULT_ROCK_PAPER_SCISSOR';

export const selectOptionRockPaperScissor = payload => {
  return {
    type: SELECT_OPTION_ROCK_PAPER_SCISSOR,
    payload,
  };
};

export const playGameRockPaperScissor = () => {
  return {
    type: PLAY_GAME_ROCK_PAPER_SCISSOR,
  };
};

export const resetGameRockPaperScissor = () => {
  return {
    type: RESET_ROCK_PAPER_SCISSOR,
  };
};

export const checkResultGameRockPaperScissor = () => {
  return {
    type: CHECK_RESULT_ROCK_PAPER_SCISSOR,
  };
};
