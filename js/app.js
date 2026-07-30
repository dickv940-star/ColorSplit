const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', e => {

    const file = e.target.files[0];

    if (!file) return;

    console.log(file.name);
});
