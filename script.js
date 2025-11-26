// ORDER NOW button action
document.querySelector(".order-btn")?.addEventListener("click", () => {
  alert("Thank you for your interest! Our team will contact you shortly.");
});

// Navbar link log to console
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(`You clicked: ${link.textContent}`);
  });
});

// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form submission for uploading documents
document.getElementById('uploadForm')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const documentFile = document.getElementById("document").files[0];

  if (!name || !documentFile) {
    alert("Please fill in all required fields.");
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("document", documentFile);

  try {
    const response = await fetch("/upload", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    alert(result.message || "Upload complete.");
  } catch (error) {
    console.error("Upload error:", error);
    alert("Failed to upload document. Please try again.");
  }
});
