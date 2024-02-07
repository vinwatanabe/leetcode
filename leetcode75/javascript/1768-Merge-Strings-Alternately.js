/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let splitWord1 = word1.split('');
	let splitWord2 = word2.split('');

	let finalWord = '';

	const mixWords = (w1, w2) => {
		if (w1.length > w2.length) {
			for (let i = 0; i < w1.length; i++) {
				if (w2.length - 1 < i) {
					finalWord += w1[i];
				} else {
					finalWord += w1[i];
					finalWord += w2[i];
				}
			}
		} else {
			for (let i = 0; i < w2.length; i++) {
				if (w1.length - 1 < i) {
					finalWord += w2[i];
				} else {
					finalWord += w1[i];
					finalWord += w2[i];
				}
			}
		}
	};

	mixWords(splitWord1, splitWord2);

	return finalWord;
};

/* Better solution */

// var mergeAlternately = function(word1, word2) {
//     const biggestWord = Math.max(word1.length, word2.length);

//     let finalWord = "";

//     for(let i = 0; i < biggestWord; i++) {
//         let charWord1 = word1[i] || '';
//         let charWord2 = word2[i] || '';

//         finalWord += charWord1 + charWord2;
//     }

//     return finalWord;
// };
