// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else { 
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }
  
  // Used to toggle the menu on smaller screens when clicking on the menu button
  function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем значение введенное пользователем
    var query = document.getElementById('searchInput').value;

    // Выполняем действия с запросом (например, отправка на сервер или поиск на текущей странице)
    console.log('Выполняем поиск по запросу:', query);
    // Вместо вывода в консоль вы можете выполнить другие действия, такие как отправка запроса на сервер и обновление страницы с результатами поиска

    // Очистка поля ввода после выполнения поиска
    document.getElementById('searchInput').value = '';
});