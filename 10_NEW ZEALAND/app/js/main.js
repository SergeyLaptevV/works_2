
window.onload = function () {

        document.getElementById("btnGet").onclick = function () {
            var xhr = new XMLHttpRequest();                 // Создание объекта для HTTP запроса.
            xhr.open("GET", "DataJSON/items.json", false);  // Настройка объекта для отправки синхронного GET запроса
            xhr.send();                                     // Отправка запроса, так как запрос является синхронным,
            var obj = JSON.parse(xhr.responseText);
            var r = document.getElementById("mains3");
            r.innerHTML =   "<div class='flex-container'>" +
                "<div class='flex-item'>" +
                "<div class='square'>" +
                obj[0].image +
                "<p class='star'>" +
                "<span>&#9733;</span>" +
                "<span>&#9733;</span>" +
                "<span>&#9733;</span>" +
                "<span class='greyStar'>&#9733;</span>" +
                "<span class='greyStar'>&#9733;</span></p>" +
                "<p class='titleBox'>"+
                obj[0].title +
                "</p>" +
                "<p class='paragraph'>" +
                obj[0].paragraph +
                "</p></div></div>" +
                "<div class='flex-item'>" +
                "<div class='square'>" +
                obj[1].image +
                "<p class='star'>" +
                "<span>&#9733;</span>" +
                "<span>&#9733;</span>" +
                "<span>&#9733;</span>" +
                "<span class='greyStar'>&#9733;</span>" +
                "<span class='greyStar'>&#9733;</span></p>" +
                "<p class='titleBox'>"+
                obj[1].title +
                "</p>" +
                "<p class='paragraph'>" +
                obj[1].paragraph +
                "</p></div></div>" +
                "<div class='flex-item'>" +
                "<div class='square'>" +
                obj[2].image +
                "<p class='star'>" +
                "<span>&#9733;</span>" +
                "<span>&#9733;</span>" +
                "<span>&#9733;</span>" +
                "<span class='greyStar'>&#9733;</span>" +
                "<span class='greyStar'>&#9733;</span></p>" +
                "<p class='titleBox'>"+
                obj[2].title +
                "</p>" +
                "<p class='paragraph'>" +
                obj[2].paragraph +
                "</p></div></div>" +
                "</div>";



        }
    }
