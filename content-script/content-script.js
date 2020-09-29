(() => {

  if (window.scriptInjected) {
    console.log("Script already injected")
  } else {
    window.scriptInjected = true;

    const placeHolderText = "test123";
    const inputId = "test_element_id";
  
  
    let el = document.getElementById(inputId);
  
    if (el) {
      el.value = placeHolderText;
    } else {
      console.log("No input found");
    }
  }
})();
