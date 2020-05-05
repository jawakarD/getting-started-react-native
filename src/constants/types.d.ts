import * as uiStates from './uiStates';
import * as todoScreens from './todoScreens';

export type UiStates = typeof uiStates[keyof typeof uiStates];
export type TodoScreens = typeof todoScreens[keyof typeof todoScreens];
