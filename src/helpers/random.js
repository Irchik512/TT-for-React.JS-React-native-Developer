export const chooseRandomWords = (dictionary, numWords) => {
  return Object.values(dictionary).reduce((selectedWords, word) => {
      // Generate a random number between 0 and the number of words we've selected so far
      const randomIndex = Math.floor(Math.random() * (selectedWords.length + 1));
  
      // If we haven't selected enough words yet, or if this word should be selected
      if (selectedWords.length < numWords || randomIndex < numWords) {
        // Insert this word at the randomly selected index
        selectedWords.splice(randomIndex, 0, word);
        // If we have too many words selected, remove the last one
        if (selectedWords.length > numWords) {
          selectedWords.pop();
        }
      }
      return selectedWords;
    }, []);
  };
  