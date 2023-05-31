
      // this is similar to function
      /* function countwords ()
        {

         }
        */
      const countwords = () => {
        let numberOfChar = document.getElementById("words").value.length;
        let numberOfWord = document.getElementById("words").value;

        numberOfWord = numberOfWord.match(/\w+/g);
        numberOfWord = numberOfWord.length;

        document.getElementById("showchar").innerHTML =
          "TOTAL CHARACTERS = " + numberOfChar;
        alert(numberOfChar);

        document.getElementById("showword").innerHTML =
          "TOTAL WORDS = " + numberOfWord;
        alert(numberOfWord);
      };
 