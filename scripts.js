//  - Free Dictionary API - https://freedictionaryapi.com/

function validateData(e){
    //prevent default form submission
    e.preventDefault();

    let word = document.getElementById("my-word").value.trim();

    if(word.length < 1 || parseInt(word)){
        document.getElementById("user-word").innerHTML = "Please enter a word before clicking the button";
        resetDisplay();
    }else{
        getWord(word);
    }
}

function getWord(word){

    // places on the page used for output
    let outputSection = document.getElementById("output");
    let userWord = document.querySelector("#user-word span");
    let display = document.getElementById("display-word-info");

    // create the string that will hold the list of definitions with each part of speech
    let definitionList = "";

    // un-hide the output section
    outputSection.classList.remove("hidden");

    // clear the list of any previous output
    resetDisplay();

    // create ajax object
    // TO DO

    // ready state change event listener
    // TO DO
        // when we get a response...
        // TO DO
            // log the returned text to the console
            // TO DO

            // parse the response into JSON, store in the wordInfo variable
            let wordInfo; // TO DO

            // check to see if an error was returned from the call (this happens when there are no entries, test in the browser with a nonsense string to see what is returned for an invalid word)
            // TO DO
                // display an error message to the user
                // userWord.innerHTML = `You have entered <strong>${"TO DO"}</strong>, which is not a valid word`;

                // clear the list to allow for an error message to be displayed
                // resetDisplay(); // TO DO uncomment

            // successful call
            // TO DO
                // display the word entered on the page
                // userWord.innerHTML = `<strong>${word}</strong>`; // TO DO uncomment
                
                // clear the list to allow for new definitions to be displayed
                // resetDisplay(); // TO DO uncomment

                // iterate through the response and display each part of speech followed by a list of the definitions for that part of speech
                // NOTE: You will need to iterate through two collections to get all of the info you need to display
				/* 
					-- the format for each part of speech and definitions is:
					<li>Part of speech: ${the actual part of speech}
						<ul>
							<li>${definition 1}</li>
							<li>${definition 2}</li>
							<li>${definition 3}</li>
							...(for however many definitions there are)
						</ul>
					</li>

				*/
                // TO DO            
    
                // add the output string to the page
                // display.innerHTML = definitionList; // TO DO uncomment

                // clear the user input to make room for another word
                // resetInput(); // TO DO uncomment

            // the closing bracket for the else statement handling a good response will go below
            // TO DO

        // the closing bracket for the if statement in the event handler when readyStatus changes to DONE will go below
        // TO DO

    // The closing bracket/parentheses for the readyStateChange event handler will go below
    // TO DO

    // start of endpoint to API
    const PATH = "https://freedictionaryapi.com/api/v1/entries/en/";

    // full path of endpoint to get a definition
    let URL; // TO DO - complete the endpoint

    // open the connection with the ajax object
    xhr.open("GET", URL);

    // this is where you would set headers if you needed to, we don't for this API

    // send the request to the API
    xhr.send();
}

// this helper function clears out the input and output for the user word
function resetInput(){
    document.getElementById("my-word").value = "";
    document.getElementById("my-word").focus(); 

}

// this helper function clears out the list where we display definitions or errors
function resetDisplay(){
    document.getElementById("display-word-info").innerHTML = "";
}

//attach event handler to button in form
document.getElementById("get-defs").addEventListener("click", validateData);

// update copyright year in footer
let today = new Date();
document.querySelector("footer span").textContent = today.getFullYear();
