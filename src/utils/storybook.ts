export const withNotes = (fn: any, notes: string) => {
  fn.story = {
    parameters: {
      notes,
    },
  };

  return fn;
};
