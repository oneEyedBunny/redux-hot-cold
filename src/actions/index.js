export const MAKE_GUESS = 'MAKE_GUESS';
export const makeNumber = number => ({
    type: MAKE_GUESS,
    number
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});
