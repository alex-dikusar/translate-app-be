export type Example = {
  id: number;
  melingoId: number;
  text: string;
};

export type Entry = {
  id: number;
  pos: number;
  entry: string;
  translationFull: string;
  examples: Example[];
};
