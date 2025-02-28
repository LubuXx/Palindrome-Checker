const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('results');

const checkPalindrome = (input) => {
    const originalInput = input.trim();

    if (originalInput === '') {
        resultDiv.replaceChildren();

        const errorMsg = document.createElement('p');
        errorMsg.className = 'error';
        errorMsg.innerText = "Please input a value!";
        resultDiv.appendChild(errorMsg);
        resultDiv.classList.remove('hidden');

        return
    }

    resultDiv.replaceChildren();

    const lowerCaseStr = originalInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `${originalInput} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerText = resultMsg;
    resultDiv.appendChild(pTag);

    resultDiv.classList.remove('hidden');
};

checkPalindrome.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkPalindrome(userInput.value);
        userInput.value = '';
    }
});