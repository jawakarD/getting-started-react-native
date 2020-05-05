import * as uiStates from './uiStates';

export type UiStates = typeof uiStates[keyof typeof uiStates];
