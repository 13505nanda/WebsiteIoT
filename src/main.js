import { database } from "./firebase-config.js";
import { ref, set, get } from "firebase/database";

document.getElementById("getSchedule").addEventListener("click", () => {
  const animal = document.getElementById("animal").value;
  const age = parseInt(document.getElementById("age").value);
  const output = document.getElementById("output");

  if (isNaN(age) || age < 0) {
    output.textContent = "Masukkan usia yang valid.";
    return;
  }

  const scheduleRef = ref(database, `feeding_schedule/${animal}`);
  get(scheduleRef).then((snapshot) => {
    const data = snapshot.val();
    let found = false;

    for (const key in data) {
      const item = data[key];
      if (age >= item.min_age && age < item.max_age) {
        output.innerHTML = `
          <h2>${key.charAt(0).toUpperCase() + key.slice(1)}</h2>
          <p><strong>Deskripsi:</strong> ${item.description}</p>
          <p><strong>Frekuensi:</strong> ${item.frequency} kali sehari</p>
          <p><strong>Porsi:</strong> ${item.portion}</p>
        `;
        found = true;
        break;
      }
    }

    if (!found) {
      output.textContent = "Tidak ada jadwal makan untuk usia ini.";
    }
  }).catch((error) => {
    console.error("Error:", error);
    output.textContent = "Gagal mengambil data dari Firebase.";
  });
});

document.getElementById("feedNow").addEventListener("click", () => {
  const feedRef = ref(database, "/feed_now");
  set(feedRef, true)
    .then(() => {
      alert("Perintah pemberian makanan berhasil dikirim!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Gagal mengirim perintah.");
    });
});
