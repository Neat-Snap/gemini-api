async function getAnswer(question) {
    try {
        const session = await window.ai.createTextSession();
        const aiResponse = await session.prompt(question);
        return aiResponse;
    } catch (e) {
        throw new Error('Error creating session, AI not enabled.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const questionInput = document.getElementById('questionInput');
    const responseOutput = document.getElementById('responseOutput');

    questionInput.addEventListener('input', async () => {
        const question = questionInput.value;

        if (question.length > 0) {
            try {
                const response = await getAnswer(question);
                responseOutput.textContent = response;
            } catch (error) {
                responseOutput.textContent = error.message;
            }
        } else {
            responseOutput.textContent = '';
        }
    });
});
