function selectAll(selectAll)  {
    const checkboxes 
         = document.getElementsByName('cs');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    })
  }