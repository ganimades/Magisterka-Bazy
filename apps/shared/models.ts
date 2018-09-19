export type ListType = 'list' | 'grid' | 'nested-list'

export interface Task {
  id?: number;
  name: string;
  isDone: boolean;
}
