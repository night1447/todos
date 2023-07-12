export type IChoice = 'all' | 'completed' | 'favourites';
export const CHOICES_SELECT: Map<string, IChoice> = new Map([['Все', 'all'],
    ['Выполненные', 'completed'],
    ['Важные', 'favourites']]);

export const CHOICES: string[] = [...CHOICES_SELECT.keys()];

