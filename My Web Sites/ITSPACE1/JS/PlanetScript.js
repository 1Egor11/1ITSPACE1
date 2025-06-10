


document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementsByClassName("planet-title")[0]
    const descr = document.getElementsByClassName("planet-description")[0]
    const specs = document.getElementsByClassName("planet-specs")[0].getElementsByTagName("p")
    const facts = document.getElementsByClassName("planet-facts")[0].getElementsByTagName("ul")[0]
    const image = document.getElementsByClassName("planet-img")[0]
    var v1 = parent.document.URL.substring(parent.document.URL.indexOf('=')+1, parent.document.URL.length);
    var fact1 = document.createElement("li");
    var fact2 = document.createElement("li");
    $.ajax({
    url: 'http://localhost/ITSPACE/',         /* Куда отправить запрос */
    method: 'get',             /* Метод запроса (post или get) */
    dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */
    data: {text: 'Текст'},     /* Данные передаваемые в массиве */
    success: function(data){
        res=$(data).filter("#"+v1);
	    console.log(res.find("p.url").text());
        title.textContent = res.find("p.title").text();
        descr.textContent = res.find("p.desc").text();
        specs[0].append(" "+res.find("p.mass").text());
        specs[1].append(" "+res.find("p.radius").text());
        specs[2].append(" "+res.find("p.temp").text());
        specs[3].append(" "+res.find("p.period").text());
        fact1.textContent = res.find("p.fact1").text();
        facts.appendChild(fact1);
        fact2.textContent = res.find("p.fact2").text();
        facts.appendChild(fact2);
        image.setAttribute("src", res.find("p.url").text());
    }
});

});