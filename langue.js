//const translations = {
    en: {
      title: "Welcome",
      description: "This is a multilingual website."
    },
    fr: {
      title: "Bienvenue",
      description: "Ceci est un site web multilingue."
    },
    ar: {
      title: "مرحبا",
      description: "هذا موقع متعدد اللغات."
    }
  };
  
  document.getElementById("languageSelect").addEventListener("change", function() {
    let lang = this.value;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
  });//
  
  