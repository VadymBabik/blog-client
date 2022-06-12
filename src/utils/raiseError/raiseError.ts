function raiseError(message: string | null) {
  if (message) {
    throw new Error(message);
  }
}

export default raiseError;
