import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

const saveFormState = throttle(() => {
    const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value
};
    localStorage.setItem(feedbackFormStateKey, JSON.stringify(feedbackFormState));
}, 500);


form.addEventListener('input', saveFormState);

window.addEventListener('load', () => {
    const feedbackFormState = JSON.parse(localStorage.getItem(feedbackFormStateKey));
    if (feedbackFormState) {
    emailInput.value = feedbackFormState.email;
    messageInput.value = feedbackFormState.message;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedbackFormState = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem(feedbackFormStateKey, JSON.stringify(feedbackFormState));
    emailInput.value = '';
    messageInput.value = '';
    console.log(feedbackFormState);
});



