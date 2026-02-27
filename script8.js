const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            console.log(e.target.result);
        };

        reader.onerror = () => {
            console.error("Error reading file");
        };

        reader.readAsText(file);
    }
});