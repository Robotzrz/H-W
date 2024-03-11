document.getElementById('done').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    document.getElementById('text').value = '';
    const msg = document.createElement('div');
    msg.classList.add('msg', 'user1');
    const userName = document.createElement('p');
    userName.textContent = 'Пользователь1';
    msg.appendChild(userName)
    const msgText = document.createElement('p');
    msgText.textContent = text;
    msgText.classList.add('text-user1');
    msg.appendChild(msgText);
    document.getElementById('message').appendChild(msg);
})
