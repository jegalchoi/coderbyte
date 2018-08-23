function abCheck(str) {
    let status;

    for(i = 0; i < str.length; i++) {
      if(str[i] == "a" && str[i + 4] == "b") {
         status = true;
         break;
      } else {
        status = false;
      };
    };
    return status;
};
