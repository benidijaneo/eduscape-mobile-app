const getCurrentUser = () => {
    const currentUserString = localStorage.getItem('currentUser');
  
    if (currentUserString) {
      return JSON.parse(currentUserString);
    }
    return null;
  };
  
  export default getCurrentUser;
  