function validateData(e){
    //prevent default form submission
    e.preventDefault();

    let word = document.getElementById("my-word").value.trim();

    // word = word.trim();

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

    // an empty string to build output
    let output = "";

    // create the inner list of definitions for this part of speech
    let definitionList = "<ul>";

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

            // check to see if an error was returned from the call
            // TO DO
                // display an error message to the user
                // userWord.innerHTML = `You have entered <strong>${"TO DO"}</strong>, which is not a valid word`;

                // clear the list to allow for an error message to be displayed
                // resetDisplay(); // TO DO uncomment

                // add the error message and resolution to the page from the API data
                // display.innerHTML = `
                //     <li>${"TO DO"}</li>
                //     <li>${"TO DO"}</li>
                // `;
            
            // successful call
            // TO DO
                // display the word entered on the page
                // userWord.innerHTML = `<strong>${word}</strong>`; // TO DO uncomment
                
                // clear the list to allow for new definitions to be displayed
                // resetDisplay(); // TO DO uncomment

                // iterate through array of returned definitions and add to string for output using a regular for loop
                // TO DO

                    // each definition is displayed in a list item
                    // output += `<li><strong>Part of Speech: ${"TO DO"}</strong>`;

                    // add each included definition to the inner list using a for of loop
                    // TO DO
                        // definitionList += `<li>${"TO DO"}</li>`;
                    

                    // close the inner list of definitions and add to output
                    // definitionList += "</ul>"; // TO DO uncomment

                    // close the list item of definitions under the current part of speech
                    // output += definitionList + "</li>"; // TO DO uncomment

                    // reset the definitionList variable for the next part of speech
                    // definitionList = "<ul>"; // TO DO uncomment
                    
                

                // add the output string to the page
                // display.innerHTML += output; // TO DO uncomment

                // reset the output string
                // output = ""; // TO DO uncomment

                // clear the user input to make room for another word
                // resetInput(); // TO DO uncomment

            // the closing bracket for the else statement handling a good response will go below
            // TO DO

        // the closing bracket for the if statement in the event handler when readyStatus changes to DONE will go below
        // TO DO

    // The closing bracket/parentheses for the readyStateChange event handler will go below
    // TO DO

    // start of endpoint to API
    const PATH = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    // full path of endpoint to get a definition
    let URL = `${PATH}${word}`;

    // open the connection with the ajax object
    xhr.open("GET", URL);

    // this is where you would set headers if you needed to

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

/* Example of returned JSON data for the word "no"
    [
    {
        "word": "no",
        "phonetic": "/nəʊ/",
        "phonetics": [
            {
                "text": "/nəʊ/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/no-uk.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9023276",
                "license": {
                    "name": "BY 3.0 US",
                    "url": "https://creativecommons.org/licenses/by/3.0/us"
                }
            },
            {
                "text": "/noʊ/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/no-us.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=711582",
                "license": {
                    "name": "BY-SA 3.0",
                    "url": "https://creativecommons.org/licenses/by-sa/3.0"
                }
            }
        ],
        "meanings": [
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "A negating expression; an answer that shows disagreement or disapproval",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "A vote not in favor, or opposing a proposition",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "The workers voted on whether to strike, and there were thirty \"yeses\" and two \"nos\"."
                    }
                ],
                "synonyms": [
                    "nay",
                    "nope"
                ],
                "antonyms": [
                    "aye",
                    "yea",
                    "yes"
                ]
            },
            {
                "partOfSpeech": "adverb",
                "definitions": [
                    {
                        "definition": "(now only used with different, with comparatives more and less, and informally with certain other adjectives such as good and fun) Not, not at all.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "I just want to find out whether she's coming or no. (Scotland)"
                    }
                ],
                "synonyms": [],
                "antonyms": []
            },
            {
                "partOfSpeech": "preposition",
                "definitions": [
                    {
                        "definition": "Without",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "Like",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [],
                "antonyms": []
            }
        ],
        "license": {
            "name": "CC BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
            "https://en.wiktionary.org/wiki/no"
        ]
    },
    {
        "word": "no",
        "phonetic": "/nəʊ/",
        "phonetics": [
            {
                "text": "/nəʊ/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/no-uk.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9023276",
                "license": {
                    "name": "BY 3.0 US",
                    "url": "https://creativecommons.org/licenses/by/3.0/us"
                }
            },
            {
                "text": "/noʊ/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/no-us.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=711582",
                "license": {
                    "name": "BY-SA 3.0",
                    "url": "https://creativecommons.org/licenses/by-sa/3.0"
                }
            }
        ],
        "meanings": [
            {
                "partOfSpeech": "adverb",
                "definitions": [
                    {
                        "definition": "At or towards the interior of a defined space, such as a building or room.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "He ran to the edge of the swimming pool and dived in."
                    },
                    {
                        "definition": "Towards the speaker or other reference point.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "For six hours the tide flows in, then for another six hours it flows out."
                    },
                    {
                        "definition": "So as to be enclosed or surrounded by something.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Bring the water to the boil and drop the vegetables in."
                    },
                    {
                        "definition": "Still eligible to play, e.g. able to bat in cricket and baseball.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "He went for the wild toss but wasn't able to stay in."
                    },
                    {
                        "definition": "After the beginning of something.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "The show still didn't become interesting 20 minutes in."
                    },
                    {
                        "definition": "(in combination, after a verb) Denotes a gathering of people assembled for the stated activity, sometimes, though not always, suggesting a protest.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [],
                "antonyms": []
            },
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "An abstract entity used to describe quantity.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Zero, one, −1, 2.5, and pi are all numbers."
                    },
                    {
                        "definition": "A numeral: a symbol for a non-negative integer.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "The number 8 is usually made with a single stroke."
                    },
                    {
                        "definition": "An element of one of several sets: natural numbers, integers, rational numbers, real numbers, complex numbers, and sometimes extensions such as hypercomplex numbers, etc.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "The equation e^{i\\pi}+1=0 includes the most important numbers: 1, 0, \\pi, i, and e."
                    },
                    {
                        "definition": "(Followed by a numeral; used attributively) Indicating the position of something in a list or sequence. Abbreviations: No or No., no or no. (in each case, sometimes written with a superscript \"o\", like Nº or №). The symbol \"#\" is also used in this manner.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Horse number 5 won the race."
                    },
                    {
                        "definition": "Quantity.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Any number of people can be reading from a given repository at a time."
                    },
                    {
                        "definition": "A sequence of digits and letters used to register people, automobiles, and various other items.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Her passport number is C01X864TN."
                    },
                    {
                        "definition": "A telephone number.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "(grammar) Of a word or phrase, the state of being singular, dual or plural, shown by inflection.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Adjectives and nouns should agree in gender, number, and case."
                    },
                    {
                        "definition": "(in the plural) Poetic metres; verses, rhymes.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "A performance; especially, a single song or song and dance routine within a larger show.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "For his second number, he sang \"The Moon Shines Bright\"."
                    },
                    {
                        "definition": "A person.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "An item of clothing, particularly a stylish one.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "A marijuana cigarette, or joint; also, a quantity of marijuana bought form a dealer.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "An issue of a periodical publication.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "the latest number of a magazine"
                    },
                    {
                        "definition": "A large amount, in contrast to a smaller amount; numerical preponderance.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [
                    "numeral",
                    "rime",
                    "scalar"
                ],
                "antonyms": []
            }
        ],
        "license": {
            "name": "CC BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
            "https://en.wiktionary.org/wiki/No.",
            "https://en.wiktionary.org/wiki/in",
            "https://en.wiktionary.org/wiki/no",
            "https://en.wiktionary.org/wiki/number"
        ]
    }
]
 */
