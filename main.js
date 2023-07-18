document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const tableBody = document.querySelector('#contact-table tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const phoneInput = document.getElementById('phone');
  
      if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return;
      }
  
      const formattedPhone = formatPhoneNumber(phoneInput.value);
      const newRow = createTableRow(nameInput.value, formattedPhone);
      tableBody.appendChild(newRow);
  
      nameInput.value = '';
      phoneInput.value = '';
    });
  
    function formatPhoneNumber(phone) {
      // Remover todos os caracteres que não sejam dígitos
      const digitsOnly = phone.replace(/\D/g, '');
  
      // Verificar se o número possui 11 dígitos (incluindo o DDD)
      if (digitsOnly.length === 11) {
        // Formatar como (DD) 9XXXX-XXXX
        return `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2, 7)}-${digitsOnly.slice(7)}`;
      } else {
        // Formatar como (DD) XXXX-XXXX
        return `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2)}`;
      }
    }
  
    function createTableRow(name, phone) {
      const newRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const phoneCell = document.createElement('td');
  
      nameCell.textContent = name;
      phoneCell.textContent = phone;
  
      newRow.appendChild(nameCell);
      newRow.appendChild(phoneCell);
  
      return newRow;
    }
  });
  