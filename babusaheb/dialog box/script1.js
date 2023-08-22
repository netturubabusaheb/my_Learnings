document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    const dialogBox = document.getElementById('dialogBox');
    
    
    
    
    const closeBtn = document.getElementById('closeBtn');

    overlay.style.display = 'block';
    dialogBox.style.display = 'block';

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        dialogBox.style.display = 'none';
    });
}); 
    document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("imageInput");
    const uploadButton = document.getElementById("uploadButton");
    const uploadInfo = document.getElementById("uploadInfo");
    const uploadCount = document.getElementById("uploadCount");
    const outputResult = document.getElementById("outputResult");

    let uploadedImages = 0;

    uploadButton.addEventListener("click", async () => {
        if (uploadedImages === 5) {
            return;
        }

        uploadedImages++;
        uploadCount.textContent = `${uploadedImages}/5`;

        if (uploadedImages === 5) {
            uploadInfo.textContent = "Maximum images uploaded.";
        }

        const inputValue = uploadedImages;

        try {
            
            const response = await fetch(`https://dev-9049167769v1791.api.raw-labs.com/patients-json?inputValue=${inputValue}`, {
                headers: {
                    'Authorization': 'Bearer https://dev-9049167769v1791.api.raw-labs.com/patients-json'
                }
            });
            const data = await response.json();

            let message = "";
            switch (inputValue) {
                case 1:
                    message = data.key1; 
                    break;
                case 2:
                    message = data.key2;
                    break;
                case 3:
                    message = data.key3;
                    break;
                case 4:
                    message = data.key4; 
                    break;
                case 5:
                    message = data.key5; 
                    break;
                default:
                    message = "Invalid input value";
                    break;
            }

            outputResult.textContent = message;
            dialogBox.style.display = "flex";
        } catch (error) {
            console.error('Error fetching data from API:', error);
            outputResult.textContent = "An error occurred while fetching data.";
            dialogBox.style.display = "flex";
        }
    });

    });

