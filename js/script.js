// Ubah nama di welcome
document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Masukkan Nama Anda:");
  if (name) {
    document.getElementById("welcomeText").innerText = `Hi ${name}, Welcome To Website`;
  }

  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("messageText").value;
    const time = new Date().toString();

    output.innerHTML = `
      <p><strong>Current time:</strong> ${time}</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
  });
});
