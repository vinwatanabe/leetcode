class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        biggestWord = max(len(word1), len(word2))
        
        finalString = ""
        
        for i in range(biggestWord):
            w1 = word1[i] if i < len(word1) else ""
            w2 = word2[i] if i < len(word2) else ""
            
            finalString += w1 + w2
        
        return finalString
        