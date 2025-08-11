export const getCurrentPageSelection = (): readonly SceneNode[] => {
  try {
    return figma.currentPage.selection;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};
