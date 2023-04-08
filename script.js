document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("schoolForm");
    const jsonOutput = document.getElementById("jsonOutput");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const type = document.getElementById("type").value;
      const level = document.getElementById("level").value;
  
      const json = {
        id: 1,
        picture: "https://example.com/school1-image.jpg",
        name: name,
        address: address,
        type: type,
        level: level,
        redirectLink: `Schools/${name.toLowerCase().replace(/ /g, "")}.html`,
      };
  
      jsonOutput.textContent = JSON.stringify(json, null, 2);
    });
  });
  