async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

document.getElementById("onboardingForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const result = await postData("/api/onboarding", data);
  document.getElementById("onboardingResult").textContent = JSON.stringify(result, null, 2);
});

document.getElementById("checkinForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const result = await postData("/api/checkin", data);
  document.getElementById("checkinResult").textContent = JSON.stringify(result, null, 2);
});