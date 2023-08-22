document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener('DOMContentLoaded', function () {
  
  const uploadButton = document.getElementById('uploadButton');
  const uploadStatus = document.querySelector('.upload-status');

  let uploadedDrawings = 0;
  const maxDrawingsPerDay = 5;
  uploadButton.addEventListener('click', function () {
    if (uploadedDrawings < maxDrawingsPerDay) {
      uploadedDrawings++;
      uploadStatus.textContent = `${uploadedDrawings}/${maxDrawingsPerDay}`;
      if (uploadedDrawings === maxDrawingsPerDay) {
        uploadButton.disabled = true;
        uploadButton.textContent = 'Upload Limit Reached';
      }
      callApiAndSwitchLogic(uploadedDrawings);
    }
  });

});




