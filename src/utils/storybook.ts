export const withNotes = (fn: any, text: string) => {
  fn.story = {
    parameters: {
      info: {
        inline: true,
        text,
      },
    },
  };

  return fn;
};
