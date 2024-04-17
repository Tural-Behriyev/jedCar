const registerForm = document.getElementById('registerForm')
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const url = 'http://localhost:3000/users/'


registerForm.addEventListener('submit',async(e) => {
    e.preventDefault();
    const {data} = await axios(url)
    const newUser = {
        username:usernameInput.value,
        password:passwordInput.value,
        cars:[]
    };

    const currentUser = data.find((user) => {
        if (user.username.toLowerCase() === newUser.username.toLowerCase()) {
            return user
        }
    });

    if (usernameInput.value.trim() && passwordInput.value.trim()) {
        if (!currentUser) {
            axios.post(url,newUser).then(({statusText}) => {
                if (statusText === 'Created') {
                    alert('ugurla elave edildi')
                }
            })
        }else {
            alert('bele istifadeci artiq var')
        }
    }else {
        alert("bos yazmaq olmaz")
    }

    usernameInput.value = ""
    passwordInput.value = ""
});

