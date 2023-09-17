$(document).ready(function() {
    $("#count-button").click(function() {
        let text = $("#text-input").val();
        let wordList = text.split(" ").filter(word => word.length > 0);
        let wordCount = {};

        wordList.forEach(word => {
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        });

        let wordListNew = $("#word-list");
        wordListNew.empty();

        for (let word in wordCount) {
            let listItem = $("<li></li>").text(`${word} ${wordCount[word]}`);
            wordListNew.append(listItem);
        }
    });
});